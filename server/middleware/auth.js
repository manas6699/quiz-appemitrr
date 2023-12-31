// middleware/auth.js
const jwt = require("jsonwebtoken");
const JWT_SECRET = "Emittr";


const auth =  async (req, res, next) => {


const token =  await req.header("Authorization");

console.log(token);

  if (!token) {
    return res.status(401).json({ msg: "No token, authorization denied" });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);

    console.log(decoded);

    req.user = decoded;
    next();
  } catch (err) {
    res.status(401).json({ msg: "Token is not valid" });
  }
};

module.exports = auth;
