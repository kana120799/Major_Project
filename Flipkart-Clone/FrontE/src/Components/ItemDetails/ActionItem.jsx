import { useState } from "react";

import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

import { Button, Box, styled } from "@mui/material";
import { ShoppingCart as Cart, FlashOn as Flash } from "@mui/icons-material";

import { useNavigate } from "react-router-dom";

import { addToCart } from "../../redux/actions/cartActions";
import { useDispatch } from "react-redux";

const LeftContainer = styled(Box)(({ theme }) => ({
  minWidth: "40%",
  padding: "2.5rem 0 0 5rem",
  [theme.breakpoints.down("md")]: {
    padding: "1.25rem 2.5rem",
  },
}));

const Image = styled("img")({
  padding: "0.9375rem 1.25rem",
  border: "1px solid #f0f0f0",
  width: "95%",
});

const StyledButton = styled(Button)`
  width: 46%;
  border-radius: 2px;
  height: 3.125rem;
  color: #fff;
`;

const ActionItem = ({ product, open, setOpen, setTT }) => {
  const navigate = useNavigate();
  const { id } = product;

  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  const addItemToCart = () => {
    dispatch(addToCart(id, quantity));
    navigate("/cart");
  };

  const handleOpen = () => {
    setOpen(true);
    setTimeout(() => {
      setOpen(false);
      setTT(false);
    }, 3000);
  };

  return (
    <LeftContainer>
      <Image src={product.detailUrl} />
      <br />
      <StyledButton
        onClick={() => addItemToCart()}
        style={{ marginRight: "0.625rem", background: "#ff9f00" }}
        variant="contained"
      >
        <Cart />
        Add to Cart
      </StyledButton>
      <StyledButton
        onClick={() => handleOpen()}
        style={{ background: "#fb641b" }}
        variant="contained"
      >
        <Flash /> Buy Now
      </StyledButton>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </LeftContainer>
  );
};

export default ActionItem;
