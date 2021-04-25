const UserService = require("../Service/UserService");

exports.register = async (req, res, next) => {
  // Register method here
  const user = await UserService.createUser({
    email: req.body.email,
    password: req.body.password,
  });
  res.json(user);
};

exports.login = async (req, res, next) => {
  // Login method here
  const user = await UserService.getUser({ email: req.body.email });
  const passwordCheck = await UserService.checkPassword(
    req.body.password,
    user.password
  );
  if (!passwordCheck) {
    return res.json("INVALID PASSWORD OR USER");
  }
  res.json(user);
};
