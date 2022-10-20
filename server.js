import db from "./db/connection.js";
import routes from "./routes/index.js"; // not created yet
import express from "express";

const app = express();
const PORT = 3000;

app.use(express.json());
app.use("/", routes);
app.use(express.static("home-page"));

db.on("connected", () => {
  // console.clear();
  console.log("Connected to MongoDB!");
  app.listen(PORT, () => {
    console.log(
      `Express server running in development on http://localhost:${PORT}`
    );
  });
});
