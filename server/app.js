const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
mongoose.set("strictQuery", true);
dotenv.config({ path: "config.env" });
const port = process.env.PORT;
require("./database/conn");
const cokieparser = require("cookie-parser");
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(
  cors({
    origin: "http://localhost:3000/",
  })
);

// to get data from forms etc in json
app.use(express.json());
app.use(cokieparser());

// we link the router files
app.use("/elca/farmer", require("./router/auth"));
app.use("/elca/items", require("./router/items"));
app.use("/elca/ws", require("./router/ws"));

// for image
var fs = require("fs");
var path = require("path");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.set("view engine", "ejs");
// Step 5 - set up multer for storing uploaded files

var multer = require("multer");

var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads");
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + "-" + Date.now());
  },
});

var upload = multer({ storage: storage });
let Item = require("./models/itemSchema");

// const User = require('./models/userSchema');

app.get("/", (req, resp) => {
  resp.status(200).json("Hello world from the server home page");
});
// console.log("home path testing")

// Middleware
// const middleware = (req , resp , next) =>{
//     console.log("Hello my middleware");
//     next();
// }

// app.get('/about' ,middleware, (req, resp) => {
//     console.log("About page runs after middleware! ")
//     resp.send("Hello world from the server about page")
// });
app.listen(port, () => {
  console.log("server is runnung at port " + port);
});
