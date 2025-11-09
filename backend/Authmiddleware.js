const jwt = require("jsonwebtoken");
const SECRET  = process.env.SECRET;

function AuthMiddleware(req, res, next) {
  try {
    const token = req.headers.authorization;
    const payload = jwt.verify(token, SECRET);
    req.user_id = payload.user_id;
    // req.username = payload.username ;
    // req.isAuth = true; // used to show buttons in navbar in ejs
    next();
  } catch (error) {
    // req.isAuth = false;
    next();
  }
}

module.exports = {
  Auth: AuthMiddleware,
};
