const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Item = require("../models/itemSchema");

// document structure
// userSchema is an instance
const wholeSellerSchema = new mongoose.Schema({
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
  address: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  itemsbought: [
    {
      i: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Item",
      },
    },
  ],
});
wholeSellerSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 12);
    console.log(this.password);
  }
  next();
});
const WholeSeller = mongoose.model("WS", wholeSellerSchema);
module.exports = WholeSeller;
