// const { areArraysEqual } = require("@mui/base");
const jwt = require("jsonwebtoken");
const user = require("../models/userSchema");

const authenticate = (req, res, next) => {
  const token = req.cookies.access_token;
  if (!token) {
    return res.sendStatus(403);
  }
  try {
    const data = jwt.verify(token, process.env.SECRETKEY);
    req.userId = data.user.id;
    console.log(req.userId + " from auth");
    req.user = data;
    return next();
  } catch {
    return res.sendStatus(403);
  }
};

// const authenticate = async (req , resp , next) => {
//     try {
//         const token = req.cookies.jwtoken;
//         console.log("authen" + token)
//         const verify = jwt.verify(token , process.env.SECRETKEY);
//          const verifiedUser = await user.findOne({_id: verify._id, "tokens.token" : token}) // tokens.token
//          if (!verifiedUser) throw new Error('User not found!')
//          req.token = token;
//          req.verifiedUser = verifiedUser;
//          req.userID = verifiedUser._id;

//          next();

//     } catch (err) {
//         console.log(err);
//         resp.status(401).send("Unauthorized not token generated! ")
//     }
// }

module.exports = authenticate;
