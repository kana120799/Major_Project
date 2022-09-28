import mongoose from "mongoose";
import productLoad from "../productLoad.js";

const Connection = async (url) => {
  //   useFindAndModify: false,
  try {
    await mongoose.connect(url, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log("Database Connected Succesfully");
    productLoad();
  } catch (error) {
    console.log("Error During DB Connection:- ", error.message);
  }
};

export default Connection;
