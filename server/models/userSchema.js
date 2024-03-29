const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// document structure
// userSchema is an instance
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  number: {
    type: Number,
    required: true,
  },
  work: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  cpassword: {
    type: String,
    required: false,
  },
  tokens: [
    {
      token: {
        type: String,
        required: false,
      },
    },
  ],
});

userSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 12);
    console.log(this.password);
    this.cpassword = await bcrypt.hash(this.cpassword, 12);
  }
  next();
});

// genrate auth token
userSchema.methods.generateAuthToken = async function () {
  try {
    let token = jwt.sign({ id: this._id }, process.env.SECRETKEY);
    this.tokens = this.tokens.concat({token:token})
    await this.save()
    return token
  } catch (err) {
    console.log(err);
  }
};

const User = mongoose.model("USER", userSchema);
module.exports = User;
