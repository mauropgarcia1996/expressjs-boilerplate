const User = require("../Model/User");
const utils = require("../Utils/utils");
const jwt = require("jsonwebtoken");

exports.createUser = async (data) => {
  const user = await User.create({
    email: data.email,
    password: await utils.encryptPassword(data.password),
  });
  return user;
};

exports.getUser = async (data) => {
  const user = await User.findOne({ email: data.email });
  const token = jwt.sign(
    {
      data: "foobar",
    },
    "secret",
    { expiresIn: "1h" }
  );
  User.findById(user.id, (err, doc) => {
    if (err) {
      return err;
    }
    doc.token = token;
    doc.save();
  });
  return {
    id: user.id,
    email: user.email,
    password: user.password,
    token: token,
  };
};

exports.checkPassword = async (password, encrypted) => {
  const result = await utils.decryptPassword(password, encrypted);
  return result;
};
