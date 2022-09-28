import React, { useEffect } from "react";
import { Box, styled } from "@mui/material";

import NavBar from "./Home/NarBar";
import Banner from "./Home/Banner";
import MidSlide from "./Home/MidSlide";
import MidImage from "./Home/MidImage";
import Slide from "./Home/Slide";

import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../redux/actions/productActions";
import Footer from "./Home/Footer";

const Component = styled(Box)(({ theme }) => ({
  padding: "0.625rem",
  background: "#f2f2f2",
  [theme.breakpoints.down("md")]: {
    padding: "0.125rem",
  },
}));

const Home = () => {
  const Products = useSelector((state) => state.getProducts);
  const { products, error } = Products;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <>
      <NavBar />
      <Component>
        <Banner />
        <MidSlide products={products} />
        <MidImage />
        <Slide
          data={products}
          title="Discounts for You"
          timer={false}
          multi={true}
        />
        <Slide
          data={products}
          title="Suggested Items"
          timer={false}
          multi={true}
        />
        <Slide
          data={products}
          title="Top Selection"
          timer={false}
          multi={true}
        />
        <Slide
          data={products}
          title="Recommended Items"
          timer={false}
          multi={true}
        />
        <Footer></Footer>
      </Component>
    </>
  );
};

export default Home;
