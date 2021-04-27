const UserService = require("../Service/UserService");

exports.register = async (req, res, next) => {
  // Register method here
  try {
    const user = await UserService.createUser({
      email: req.body.email,
      password: req.body.password,
    });
    res.json(user);
  } catch (error) {
    res.status(500).send(error.code === 11000 ? 'That email already exists.' : 'An error ocurred. Try again.')
  }
  
};

exports.login = async (req, res, next) => {
  // Login method here
  console.log(req.user)
  // const user = await UserService.getUser({ email: req.body.email });
  // const passwordCheck = await UserService.checkPassword(
  //   req.body.password,
  //   user.password
  // );
  // if (!passwordCheck) {
  //   return res.json("INVALID PASSWORD OR USER");
  // }
  res.json(req.user);
};
