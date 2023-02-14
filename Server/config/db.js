const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(
      `MongoDB Connected: ${conn.connection.host}`.green.underline.bold
    );
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

module.exports = connectDb;
