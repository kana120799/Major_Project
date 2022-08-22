import React from "react";
import { Box, Typography, Button, styled } from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";

const Container = styled(Box)`
  display: flex;
`;
const Wrapper = styled(Box)`
  margin: 0 3% 0 2%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  & > button,
  & > p,
  & > div {
    margin-right: 40px !important;
    color: #ffffff;
    font-size: 12;
    align-items: center;
  }
`;
const LoginButton = styled(Button)`
  color: "#2874f0";
  background: "#FFFFFF";
  text-transform: "none";
  font-weight: 600;
  border-radius: 2;
  padding: "5px 40px";
  height: 32;
  box-shadow: "none";
`;
const CustomButtons = () => {
  return (
    <Wrapper>
      <LoginButton
        variant="contained"
        style={{ backgroundColor: "white", color: "blue" }}
      >
        Login
      </LoginButton>
      <Typography style={{ marginTop: 4, width: 135, gridColumn: 3 / 4 }}>
        Become a Seller
      </Typography>
      <Typography style={{ marginTop: 5 }}>More</Typography>

      <Container>
        <ShoppingCart />
        <Typography style={{ marginLeft: 10 }}>Cart</Typography>
      </Container>
    </Wrapper>
  );
};
export default CustomButtons;
