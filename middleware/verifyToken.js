const jwt = require("jsonwebtoken");
const UserModel = require("../models/user.model");

function verifyToken(req, res, next) {
  if (
    req.headers &&
    req.headers.authorization &&
    req.headers.authorization.split(" ")[0] === "JWT"
  ) {
    jwt.verify(
        req.headers.authorization.split(' ')[1],
        'secretkey',
        async function (err, verifyToken) {
            if(err){
               return res.status(403).json({message: "Invalid JWT Token"})
            }
            let user = await UserModel.findById(verifyToken.id);
            req.user = user; // we added user object in request, so that from now on we don't need to find user by id
            next();
        }
    )
  } else{
    return res.status(404).json({message: "Token not found"})
  }
}

module.exports = verifyToken;
