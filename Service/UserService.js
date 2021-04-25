const User = require("../Model/User");
const utils = require("../Utils/utils");

exports.createUser = async (data) => {
  const user = await User.create({
    email: data.email,
    password: await utils.encryptPassword(data.password),
  });
  return user;
};

exports.getUser = async (data) => {
  const user = await User.findOne({ email: data.email });
  return user;
};

exports.checkPassword = async (password, encrypted) => {
  const result = await utils.decryptPassword(password, encrypted);
  return result;
};
