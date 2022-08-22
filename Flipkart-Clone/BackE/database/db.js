import mongoose from "mongoose";

const Connection = async (username, password) => {
  const url = `mongodb+srv://${username}:${password}@flipkart-ecomm.uwe2n.mongodb.net/?retryWrites=true&w=majority`;
  //   useFindAndModify: false,
  try {
    await mongoose.connect(url, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log("Database Connected Succesfully");
  } catch (error) {
    console.log("Error: ", error.message);
  }
};

export default Connection;
