const UserService = require("../Service/UserService");
const jwt = require("jsonwebtoken");

exports.register = async (req, res, next) => {
  try {
    const user = await UserService.createUser({
      email: req.body.email,
      password: req.body.password,
    });
    res.json(user);
  } catch (error) {
    res
      .status(500)
      .send(
        error.code === 11000
          ? "That email already exists."
          : "An error ocurred. Try again."
      );
  }
};

exports.login = async (req, res, next) => {
  res.json(req.user);
};

exports.logout = async (req, res, next) => {
  req.logout();
  res.send("Logged Out!");
};

exports.checkAuth = async (req, res, next) => {
  const decoded = await jwt.verify(req.body.token, "secret");
  if (!decoded) {
    res.status(500).send("Invalid Token")
  }
  res.status(200).json(decoded)
};
