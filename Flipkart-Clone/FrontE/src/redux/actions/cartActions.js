import axios from "axios";

const URL = "";
export const addToCart = (id, quantity) => async (dispatch) => {
  try {
    const { data } = await axios.get(`${URL}/product/${id}`);

    dispatch({ type: "addToCart", payload: { ...data, quantity } });
  } catch (error) {
    console.log("Error while calling cart API");
  }
};

export const removeFromCart = (id) => (dispatch) => {
  dispatch({
    type: "removeFromCart",
    payload: id,
  });
};
