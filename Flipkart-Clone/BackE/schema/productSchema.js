import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  id: { type: String, unique: true },
  url: String,
  detailUrl: String,
  title: Object,
  price: Object,
  quantity: Number,
  description: String,
  discount: String,
  tagline: String,
});
// ProductSchema Model
const productModel = mongoose.model("product", productSchema);

export default productModel;
