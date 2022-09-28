import axios from "axios";

const URL = "";
export const getProducts = () => async (dispatch) => {
  try {
    const { data } = await axios.get(`${URL}/products`);
    dispatch({ type: "getProductsSuccess", payload: data });
  } catch (error) {
    dispatch({ type: "getProductsFail", payload: error.response });
  }
};

export const getProductDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: "getProductDetailsRequest" });
    const { data } = await axios.get(`${URL}/product/${id}`);
    console.log(data);
    dispatch({ type: "getProductDetailSuccess", payload: data });
  } catch (error) {
    dispatch({
      type: "getProductDetailFail",
      payload: error.response,
    });
  }
};

export const removeProductDetails = () => (dispatch) => {
  dispatch({ type: "getProductDetailReset" });
};
