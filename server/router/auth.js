const express = require("express");
const router = express.Router();
require("../database/conn");
const User = require("../models/userSchema");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const authenticate = require("../middleware/authenticate");

// get means read
// post means get user written details
router.get("/", (req, resp) => {
  resp.send("Hello world from the server home page");
});

router.post("/register", (req, resp) => {
  console.log(" req " + req.body);
  const { name, email, number, work, password, cpassword } = req.body;
  console.log(number);
  // resp.json({message: req.body});
  //resp.send("Register page")
  if (!name || !email || !number || !work || !password || !cpassword) {
    return resp
      .status(422)
      .json({ error: "Please input values for all fields!" });
  }

  if (cpassword != password) {
    return resp
      .status(422)
      .json({ error: "Please make sure that passwords match!" });
  }

  User.findOne({ email: email })
    .then((userExist) => {
      if (userExist) {
        console.log("userExists" + userExist);
        return resp.status(422).json({ error: "This email already exists!" });
      }
      //const user = new User(req.body)
      const user = new User({
        name,
        email,
        number,
        work,
        password,
        cpassword,
      });

      user
        .save()
        .then(() => {
          // why not return
          resp.status(201).json({ message: "Registration succesful!" });
        })
        .catch((err) => {
          console.log(err);
          resp.status(422).json({ error: "Registration unsuccesful!" });
        });
    })
    .catch((err) => {
      resp.status(422).json({ error: "Registration failed!!" });
    });
});
// no empty fields
// email must be registered
// passwords should be matched

router.post("/login", async (req, resp) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return resp
        .status(422)
        .json({ error: "Please input values for all fields!" });
    }
    const u = await User.findOne({ email: email });
    if (u) {
      const isMatch = await bcrypt.compare(password, u.password);
      console.log("74 " + u._id + password + isMatch);

      //   let token = await u.generateAuthToken();
      //   resp.send(token);
      // console.log(token);

      // //30 days expiry date
      // resp.cookie("jwtoken", token, {
      //   expires: new Date(Date.now() + 25892000000),
      //   httpOnly: true
      // });

      const payload = {
        user: {
          id: u._id,
        },
      };

      if (!isMatch) {
        resp.status(400).json({ error: "Invalid Credentials!!" });
      } else {
        const token = jwt.sign(payload, process.env.SECRETKEY);
        resp.cookie("access_token", token, {
          httpOnly: true,
        });
        resp.json(token);
      }
    } else {
      console.log(err);
      resp.status(400).json({ error: "Invalid Credentials!" });
    }
  } catch (err) {
    console.log(err);
    resp.json({ error: "Log In failed!!" });
  }
});

router.get("/about", authenticate, async (req, resp) => {
  try {
    console.log("About page runs after middleware! ");
    console.log(req.userId);
    const u = await User.findOne({ _id: req.userId });
    resp.send(u);
  } catch (err) {
    resp.status(403).send({ error: "Authorization Failed" });
  }
});
module.exports = router;
