import express from "express";
import FileUpload from "express-fileupload";
import cors from "cors";
import db from "./config/database.js";
import ProductRoute from "../backend/routes/ProductRoute.js";
// import Users from "./models/UserModel.js";

const app = express();

try {
  await db.authenticate();
  console.log("database connected");
//   await Users.sync();
} catch (error) {
  console.error(error);
}

app.use(cors());
app.use(FileUpload());
app.use(express.json());
app.use(express.static("public"));
app.use(ProductRoute);

app.listen(5000, () => console.log("server up and runnning...."));
