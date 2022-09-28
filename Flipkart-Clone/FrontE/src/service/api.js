import { FlashOnRounded } from "@mui/icons-material";
import axios from "axios";

const url = "";

export const authenticateLogin = async (user) => {
  try {
    if (user) return await axios.post(`${url}/login`, user);
    else return FlashOnRounded;
  } catch (error) {
    console.log("error while calling login API: ", error);
  }
};

export const authenticateSignup = async (user) => {
  try {
    return await axios.post(`${url}/signup`, user);
  } catch (error) {
    console.log("error while calling Signup API: ", error);
  }
};

export const getProductById = async (id) => {
  try {
    return await axios.get(`${url}/product/${id}`);
  } catch (error) {
    console.log("Error while getting product by id response", error);
  }
};
