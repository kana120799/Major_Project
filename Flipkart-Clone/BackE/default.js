import Product from "./model/productSchema.js";
import { products } from "./constants/product.js";

//data base external entitty hai to error ke chance hote hai thats why i use try and actch
const DefaultData = async () => {
  try {
    //database problem :- duplicate collection of document.//vo hi jab data base ko call karenge to baar baar same data bana dega.
    //hum jab sikh rahe the tb r1 baar baar call ho jaa raha tha.
    //Solution:- you can chanege schema by unique:true So i use it thats why i delete it .
    // await Product.deleteMany({});

    await Product.insertMany(products);
    console.log("Data imported Successfully");
  } catch (error) {
    console.log("Error: ", error.message);
  }
};

export default DefaultData;
