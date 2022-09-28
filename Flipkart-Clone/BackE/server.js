import express from "express";
import dotenv from "dotenv";
import Connection from "./database/db.js";
import bodyParser from "body-parser";
import cors from "cors";
import Routes from "./routes/route.js";

const app = express();
const PORT = process.env.PORT || 8000;
app.use(cors());
// ============== bodyParse for handle POST api body ==========================
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
// dotenv.config to initiate dotnet file
dotenv.config();
var user = process.env.DB_UserName;
var pass = process.env.DB_Password;
// ===>
const url =
  process.env.MONGODB_URI ||
  `mongodb+srv://${user}:${pass}@flipkart-ecomm.uwe2n.mongodb.net/?retryWrites=true&w=majority`;
// ===>
Connection(url);
// ===>
if (process.env.NODE_ENV === "production") {
  app.use(express.static(`FrontE/build`));
}
// ===>
// ==> app.use("/", Routes);
app.use(Routes);
// app.listen(PORT, "127.0.0.1", () => {
//   console.log(`Server run on ${PORT}`);
// });
// ===>
app.listen(PORT, () => {
  console.log(`Server run on ${PORT}`);
});
