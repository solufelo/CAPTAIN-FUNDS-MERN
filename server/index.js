import express from "express";
import dotenv from "dotenv";
import dbConfig from "./config/db-config.js";
import userRoutes from "./routes/user-routes.js";
dotenv.config();

const app = express();
const port = process.env.PORT || 5000;
dbConfig();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/users", userRoutes);
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
}); 