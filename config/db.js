const mongoose = require("mongoose");
mongoose.set("strictQuery", true);
const dotenv = require("dotenv");
dotenv.config();

const db = process.env.MONGODB_URL;
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connect success!");
  })
  .catch((err) => {
    console.error("Connect fail!" + err);
  });
module.exports = mongoose;
