import express from "express";
import dotenv from "dotenv";
import Connection from "./database/db.js";
import DefaultData from "./default.js";
const app = express();

dotenv.config();
//fetch username and Password from .env file.
var user = process.env.DB_UserName;
var pass = process.env.DB_Password;
Connection(user, pass);
app.listen(8000, "127.0.0.1", () => {
  console.log("Server run on 8000");
});
DefaultData();
