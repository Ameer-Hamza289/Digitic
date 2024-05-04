const jwt = require("jsonwebtoken");
function authMiddleware(req, res, next) {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "Please login to continue" });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: "Invalid access token" });
    }

    req.user = decoded;
    next();
  });
}

const isAdmin = (requiredRole) => (req, res, next) => {
  const user = req.user;

  if (!user || !user.role || user.role !== requiredRole) {
    return res
      .status(403)
      .json({ message: "Unauthorized: Admin role required" });
  }

  next();
};

module.exports = { authMiddleware, isAdmin };
