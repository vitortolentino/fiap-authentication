import jwt from "jsonwebtoken";

const { SECRET_KEY } = process.env;

export const authenticateJWT = (req, res, next) => {
  const token = req.header("Authorization");

  if (token) {
    jwt.verify(token, SECRET_KEY, (err, user) => {
      if (err) {
        return res.sendStatus(403);
      }
      req.user = user;
      next();
    });
  } else {
    res.sendStatus(401);
  }
};
