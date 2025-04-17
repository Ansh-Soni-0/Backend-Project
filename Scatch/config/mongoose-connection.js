const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1:27017/scatch")
  .then(() => console.log("MongoDb Connected"))
  .catch((err) => console.log(err));

module.exports = mongoose.connection;