import productModel from "./schema/productSchema.js";
import { products } from "./Products/product.js";

const productLoad = async () => {
  try {
    // await Product.deleteMany({});
    await productModel.insertMany(products);
    console.log("Product Data imported Successfully");
  } catch (error) {
    console.log("Error in Importing Product Data:-", error.message);
  }
};

export default productLoad;
