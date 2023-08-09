const express = require("express");
const router = express.Router();
require("../database/conn");
const Item = require("../models/itemSchema");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const authenticate = require("../middleware/authenticate");
const authenticateWS = require("../middleware/authenticatews");
const cokieparser = require("cookie-parser");
const bodyParser = require("body-parser");
const multer = require("multer");
const fs = require("fs");

//storage
const Storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({
  storage: Storage,
});

// farmer fetch
router.get(
  "/fetchitems",
  /*authenticate*/ async (req, resp) => {
    try {
      const notes = await Item.find({
        farmer: "63ca052c4cb3e06215414efe",
      }).populate("buyer");
      // const notes = await Item.find();
      // has buyer
      console.log(notes[0].buyer.name);
      // has no buyer
      //console.log(notes[2].buyer)
      resp.send(notes);
    } catch (err) {
      console.log(err);
      resp.status(500).send("Item could not be found!");
    }
  }
);
// wholeseller fetch
router.get("/fetchitems/all", async (req, resp) => {
  try {
    const notes = await Item.find().populate("farmer");
    // const notes = await Item.find();
    console.log(notes[0].farmer.name);
    resp.status(200).json(notes);
  } catch (err) {
    console.log(err);
    resp.status(500).send("Item could not be found!");
  }
});

router.get("/fetchitems/all/sorteda", async (req, resp) => {
  try {
    const notes = await Item.find().populate("farmer").sort({ price: 1 });
    // const notes = await Item.find();
    console.log(notes[0].farmer.name);
    resp.send(notes);
  } catch (err) {
    console.log(err);
    resp.status(500).send("Item could not be found!");
  }
});

router.get("/fetchitems/all/sortedd", async (req, resp) => {
  try {
    const notes = await Item.find().populate("farmer").sort({ price: -1 });
    // const notes = await Item.find();
    console.log(notes[0].farmer.name);
    resp.send(notes);
  } catch (err) {
    console.log(err);
    resp.status(500).send("Item could not be found!");
  }
});
router.get("/fetchitems/bought", authenticateWS, async (req, resp) => {
  try {
    console.log(req.userId);
    const notes = await Item.find({ buyer: req.userId }).populate("farmer");
    // const notes = await Item.find();
    resp.send(notes);
  } catch (err) {
    console.log(err);
    resp.status(500).send("Item could not be found!");
  }
});
// wholedeller fetch ends

router.post(
  "/additems",
  upload.single("testImage"),
  /*authenticate*/ async (req, resp) => {
    try {
      console.log(req);
      const { name, price, quantity } = req.body;

      // console.log(req);

      // console.log(req.userId);

      // farmer unchecked
      const item = new Item({
        farmer: "63ca052c4cb3e06215414efe",
        name,
        price,
        quantity,
        img: {
          data: fs.readFileSync("uploads/" + req.file.filename),
          contentType: "image/png",
        },
      });
      // const item = new Item({ name, price, quantity });
      const saveditem = await item.save();

      resp.status(200).json(saveditem);
    } catch (err) {
      console.log(err);
      resp.status(500).send("Item could ot be saves");
    }
  }
);
// farmer update
router.put("/updateitem/:id", authenticate, async (req, resp) => {
  try {
    const { name, price, quantity } = req.body;
    let newItem = {};
    if (name) {
      newItem.name = name;
    }
    if (price) {
      newItem.price = price;
    }
    if (quantity) {
      newItem.quantity = quantity;
    }

    let item = await Item.findById(req.params.id);
    console.log(req.params.id + "   " + req.userId);
    console.log(item);
    console.log("f" + item.farmer);
    if (!item) return resp.status(404).send("Not found!");

    if (item.farmer != req.userId) {
      return resp.status(401).send("Unauthorized!");
    }

    item = await Item.findByIdAndUpdate(
      req.params.id,
      { $set: newItem },
      { new: true }
    );
    resp.json({ item });
  } catch (err) {
    console.log(err);
    resp.status(500).send("Item could not be updated");
  }
});

// ws update
router.put(
  "/updateitem/ws/:id",
  /*authenticateWS*/ async (req, resp) => {
    try {
      const { price, quantity } = req.body;
      console.log(price);
      console.log(quantity);

      let i1 = await Item.findById(req.params.id);
      console.log(i1.price);
      let newItem = {};
      if (price > i1.price + i1.price * 0.1) {
        newItem.price = price;
        newItem.buyer = "63c8dacb725f4385eba6dfe4";
      } else {
        return resp.send({ message: "Bid price should be higher than 10%" });
      }
      //   if (quantity) {
      //     console.log("q "+ quantity)
      //     newItem.quantity = quantity
      //   }
      console.log(req.userId);
      console.log(newItem);
      console.log(req.params.id);
      let item = await Item.findById(req.params.id);
      if (!item) return resp.status(404).send("Not found!");

      //   if (item.buyer != req.userId) {
      //     return resp.status(401).send("Unauthorized!");
      //   }
      // if (!req.userId) return resp.status(401).send("Unauthorized!");

      item = await Item.findByIdAndUpdate(
        req.params.id,
        { $set: newItem },
        { new: true }
      );
      resp.json({ item });
    } catch (err) {
      console.log(err);
      resp.status(500).send("Bid could not be placed");
    }
  }
);

// ws update ends
router.delete("/deleteitem/:id", authenticate, async (req, resp) => {
  try {
    let item = Item.findById(req.params.id);
    if (!item) return resp.status(404).send("Not found!");

    if (item.farmer != req.userID) {
      return resp.status(401).send("Unauthorized!");
    }

    item = await Item.findByIdAndDelete(req.params.id);
    resp.json({ item });
  } catch (err) {
    console.log(err);
    resp.status(500).send("Item could bot be deletde");
  }
});

module.exports = router;
