export default function errorHandler(error, _req, res, next) {
  console.log(error.message);

  if (error.name === "JsonWebTokenError") {
    return res.status(400).json({ error: "Invalid token" });
  } else if (error.name === "TokenExpiredError") {
    return res.status(401).json({ error: "Token expired" });
  }
};