import mongoose from "mongoose";

mongoose.set("returnOriginal", false);

mongoose.connect("mongodb://127.0.0.1:27017/country-api").catch((err) => {
  console.log(`Error connection go MongoDB: ${err.message}`);
});

mongoose.connection.on("connected", () => {
  console.log("Connected to MongoDB!");
});

mongoose.connection.on("disconnected", () => {
  console.log("Disconnected from MongoDB!");
});

mongoose.connection.on("error", (err) => {
  console.log(`MongoDB connection error: ${err}`);
});

export default mongoose.connection;
