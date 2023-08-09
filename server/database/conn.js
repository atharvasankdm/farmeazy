const mongoose = require('mongoose');
const DB = process.env.DATABASE;
// dotenv.config({path: './config.env'}); not req if present in app.js
// const DB = 'mongodb+srv://jeet:jeet09@cluster0.f465cin.mongodb.net/healthtrial2?retryWrites=true&w=majority'



mongoose.connect(DB , {
    useNewUrlParser: true,
    UseUnifiedTopology: true,
}).then(()=> {
    console.log("Connected");
}).catch((err) => {
    console.log("Error" + err);
})