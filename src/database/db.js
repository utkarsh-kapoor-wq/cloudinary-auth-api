import mongoose from "mongoose";

const connectToDB = async () => {
  try {
    await mongoose.connect(process.env.DB_LINK);
    console.log("MongoDB connected successfully");
  } catch (e) {
    console.error("MongoDB connection failed");
    process.exit(1);
  }
};

export default connectToDB;
