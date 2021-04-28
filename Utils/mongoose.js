const mongoose = require("mongoose");
const MONGO_URI = process.env.MONGO_URI;
exports.connect = () => {
  mongoose
    .connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("MongoDB connected."));
  return mongoose.connection;
};
