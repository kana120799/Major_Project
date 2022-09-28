import { useEffect } from "react";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

import { Box, Typography, Button, Grid, styled, Divider } from "@mui/material";
import { useParams } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../../redux/actions/cartActions";
import { Link } from "react-router-dom";

import TotalView from "./TotalView";
import EmptyCart from "./EmptyCart";
import CartItem from "./CartItem";

import { useState } from "react";

const Component = styled(Grid)(({ theme }) => ({
  padding: "30px 135px",
  display: "flex",
  [theme.breakpoints.down("sm")]: {
    padding: "15px 0",
  },
}));

const LeftComponent = styled(Grid)(({ theme }) => ({
  paddingRight: 15,
  [theme.breakpoints.down("sm")]: {
    marginBottom: 15,
  },
}));

const Header = styled(Box)`
  padding: 15px 24px;
  background: #fff;
`;

const BottomWrapper = styled(Box)`
  padding: 16px 22px;
  background: #fff;
  box-shadow: 0 -2px 10px 0 rgb(0 0 0 / 10%);
  border-top: 1px solid #f0f0f0;
`;

const StyledButton = styled(Button)`
  display: flex;
  margin-left: auto;
  background: #fb641b;
  color: #fff;
  border-radius: 2px;
  width: 250px;
  height: 51px;
`;

const Cart = () => {
  let [open, setOpen] = useState(false);
  const cartDetails = useSelector((state) => state.cart);
  const { cartItems } = cartDetails;
  const { id } = useParams();
  let [payment, setPayment] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (cartItems && id !== cartItems.id) dispatch(addToCart(id));
  }, [dispatch, cartItems, id]);

  const removeItemFromCart = (id) => {
    dispatch(removeFromCart(id));
  };
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

  const handleOpen = () => {
    setOpen(true);
    setTimeout(() => {
      setOpen(false);
      cartItems.length = 0;
      setPayment(true);
    }, 3000);
  };
  return (
    <>
      {cartItems.length ? (
        <Component container>
          <LeftComponent item lg={9} md={9} sm={12} xs={12}>
            <Header>
              <Typography style={{ fontWeight: 600, fontSize: "1.125rem" }}>
                My Cart ({cartItems?.length})
              </Typography>
            </Header>
            {cartItems.map((item, ind) => (
              <CartItem
                item={item}
                removeItemFromCart={removeItemFromCart}
                key={ind}
              />
            ))}
            <BottomWrapper>
              <StyledButton onClick={() => handleOpen()} variant="contained">
                Place Order
              </StyledButton>
              <Backdrop
                sx={{
                  color: "#fff",
                  zIndex: (theme) => theme.zIndex.drawer + 1,
                }}
                open={open}
              >
                <CircularProgress color="inherit" />
              </Backdrop>
            </BottomWrapper>
          </LeftComponent>
          <Grid item lg={3} md={3} sm={12} xs={12}>
            <TotalView cartItems={cartItems} />
          </Grid>
        </Component>
      ) : (
        <EmptyCart />
      )}
      {payment && (
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
      )}
    </>
  );
};

export default Cart;
