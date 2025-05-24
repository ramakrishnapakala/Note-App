import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Mongodb Connected Successfully");
  } catch (err) {
    console.log("Mongodb Connection Failed", err);
    process.exit(1);
  }
};

export default connectDB;
