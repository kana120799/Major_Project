import { useState, useEffect } from "react";

import { styled, Box, Typography, Grid, Divider } from "@mui/material";

import { Link } from "react-router-dom";

import ProductDetail from "./ProductDetail";
import ActionItem from "./ActionItem";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { getProductDetails } from "../../redux/actions/productActions";

const Component = styled(Box)`
  margin-top: 3.4375rem;
  background: #f2f2f2;
`;

const Container = styled(Grid)(({ theme }) => ({
  background: "#FFFFFF",
  display: "flex",
  [theme.breakpoints.down("md")]: {
    margin: 0,
  },
}));

const RightContainer = styled(Grid)`
  margin-top: 3.125rem;
  & > p {
    margin-top: 0.625rem;
  }
`;

const DetailView = () => {
  const dk = {
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    position: "absolute",
    zIndex: 100,
    top: 0,
    left: 0,
    transition: "10s linear",
  };

  const pk = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
    width: "20%",
    height: "40%",
    backgroundColor: "white",
    position: "absolute",
    zIndex: 100,
    top: "35%",
    left: "40%",
  };

  const lk = {
    width: "2.5rem",
    height: "2.5rem",
  };

  const [open, setOpen] = useState(false);
  let [tt, setTT] = useState(true);
  const fassured =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png";

  const { id } = useParams();

  const { loading, product } = useSelector((state) => state.getProductDetails);

  const dispatch = useDispatch();

  useEffect(() => {
    if (product && id !== product.id) {
      dispatch(getProductDetails(id));
    }
  }, [dispatch, product, id, loading]);

  return tt ? (
    <Component>
      <Box></Box>
      {product && Object.keys(product).length && (
        <Container container>
          <Grid item lg={4} md={4} sm={8} xs={12}>
            <ActionItem
              product={product}
              open={open}
              setOpen={setOpen}
              setTT={setTT}
            />
          </Grid>

          <RightContainer item lg={8} md={8} sm={8} xs={12}>
            <Typography>{product.title.longTitle}</Typography>
            <Typography
              style={{
                marginTop: "0.3125rem",
                color: "#878787",
                fontSize: "0.875rem",
              }}
            >
              8 Ratings & 1 Reviews
              <span>
                <img
                  src={fassured}
                  style={{ width: "4.8125rem", marginLeft: "1.25rem" }}
                  alt="ima"
                />
              </span>
            </Typography>
            <Typography>
              <span style={{ fontSize: "1.75rem" }}>₹{product.price.cost}</span>
              &nbsp;&nbsp;&nbsp;
              <span style={{ color: "#878787" }}>
                <strike>₹{product.price.mrp}</strike>
              </span>
              &nbsp;&nbsp;&nbsp;
              <span style={{ color: "#388E3C" }}>
                {product.price.discount} off
              </span>
            </Typography>
            <ProductDetail product={product} />
          </RightContainer>
        </Container>
      )}
    </Component>
  ) : (
    <paymentSuccess style={dk}>
      <paymentSuccessContent style={pk}>
        <img src="../Image/2.png" alt="dfdsfdsfsfs" style={lk}></img>
        Payment Successful
        <Divider style={{ width: "100%" }}></Divider>
        <Link to="/" style={{ textDecoration: "none" }}>
          Okay
        </Link>
      </paymentSuccessContent>
    </paymentSuccess>
  );
};

export default DetailView;
