const bcrypt = require("bcrypt");

exports.encryptPassword = async (raw) => {
  const saltRounds = 10;
  try {
    return await bcrypt.hash(raw, saltRounds);
  } catch (error) {
    console.log(err);
  }
  return null;
};

exports.decryptPassword = async (raw, encrypted) => {
  const saltRounds = 10;
  try {
    return await bcrypt.compare(raw, encrypted);
  } catch (error) {
    console.log(error);
  }
  return null;
};
