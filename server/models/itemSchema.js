const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("./userSchema");
const WholeSeller = require("./wholeSellerSchema");

// document structure
// userSchema is an instance
const itemSchema = new mongoose.Schema({
  farmer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "USER",
  },
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },

  //   img:
  //     {
  //         data: Buffer,
  //         contentType: String
  //     },
  date: {
    type: Date,
    default: Date.now,
  },
  buyer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "WS",
  },
});

const Item = mongoose.model("ITEMS", itemSchema);
module.exports = Item;
