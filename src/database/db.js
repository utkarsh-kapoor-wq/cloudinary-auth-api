import mongoose from "mongoose";
const connectToDB = async (dblink) => {
  try {
    await mongoose.connect(dblink);
    console.log("MongoDB connected successfully");
  } catch (e) {
    console.error("MongoDB connection failed");
    process.exit(1);
  }
};

export default connectToDB;
