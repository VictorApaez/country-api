import mongoose from "mongoose";

// const connectDB = async () => {
mongoose.set("returnOriginal", false);
const url = process.env.MONGO_URL || "mongodb://127.0.0.1:27017/country-api";

const mongooseConfig = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
mongoose.connect(url, mongooseConfig).catch((err) => {
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
// };

export default mongoose.connection;
