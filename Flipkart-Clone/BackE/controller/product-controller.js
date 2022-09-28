import productModel from "../schema/productSchema.js";
// ===========================================================               Get Products           =============================================================
export const getProducts = async (req, res) => {
  try {
    const products = await productModel.find({});
    res.json(products);
  } catch (error) {
    console.log(
      "Error to Get Product from product-controller :-",
      error.message
    );
  }
};
// ===========================================================               Get Products By Id           =============================================================

export const getProductById = async (req, res) => {
  try {
    const products = await productModel.findOne({ id: req.params.id });
    res.json(products);
  } catch (error) {
    console.log(
      "Error to Get Product by Id from product-controller:-",
      error.message
    );
  }
};
