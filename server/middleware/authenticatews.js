// const { areArraysEqual } = require("@mui/base");
const jwt = require("jsonwebtoken");
const WholeSeller = require("../models/wholeSellerSchema");
const Item = require("../models/itemSchema");

const authenticateWS = (req, res, next) => {
  // console.log(req.cookies);
  console.log(res.cookies_login);
  const token = req.header("access_token");
  if (!token) {
    return res.sendStatus(403);
  }
  try {
    const data = jwt.verify(token, process.env.SECRETKEY);
    req.userId = data.user.id;
    console.log("ws " + data.user.id);
    req.user = data;
    return next();
  } catch {
    return res.sendStatus(403);
  }
};

module.exports = authenticateWS;
