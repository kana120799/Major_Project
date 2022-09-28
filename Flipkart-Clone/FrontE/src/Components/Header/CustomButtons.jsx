import React, { useState, useContext } from "react";

import { Box, Typography, Badge, Button, styled } from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";

import { Link } from "react-router-dom";
import { LoginContext } from "../../context/ContextProvider";

import Profile from "./Profile";
import LoginDialog from "../Login/LoginDialog";

const Container = styled(Link)(({ theme }) => ({
  display: "flex",
  [theme.breakpoints.down("sm")]: {
    marginTop: "1.875rem",
  },
}));

const Become = styled(Typography)(({ theme }) => ({
  marginTop: "3px",
  width: "135px",
  [theme.breakpoints.down("sm")]: {
    marginTop: "30px",
  },
}));
const More = styled(Typography)(({ theme }) => ({
  marginTop: "0.1875rem",

  [theme.breakpoints.down("sm")]: {
    marginTop: "1.875rem",
  },
}));

const Wrapper = styled(Box)(({ theme }) => ({
  margin: "0 3% 0 auto",
  display: "flex",
  "& > *": {
    marginRight: "2.5rem !important",
    textDecoration: "none",
    color: "#FFFFFF",
    fontSize: "0.75rem",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      color: "#2874f0",
      alignItems: "center",
      display: "flex",
      flexDirection: "row",
      marginTop: "0.625rem",
    },
  },
  [theme.breakpoints.down("sm")]: {
    display: "block",
    marginTop: "1.875rem",
    marginLeft: "2.5rem",
    justifyContent: "center",
    alignItems: "center",
  },
}));

const LoginButton = styled(Button)(({ theme }) => ({
  color: "#2874f0",
  background: "#FFFFFF",
  textTransform: "none",
  fontWeight: 600,
  borderRadius: 2,
  padding: "0.3125rem 2.5rem",
  height: "2rem",
  boxShadow: "none",
  [theme.breakpoints.down("sm")]: {
    background: "#2874f0",
    color: "#FFFFFF",
  },
}));

const CustomButtons = () => {
  const [open, setOpen] = useState(false);
  const { account, setAccount } = useContext(LoginContext);

  const openDialog = () => {
    setOpen(true);
  };

  return (
    <Wrapper>
      {account ? (
        <Profile account={account} setAccount={setAccount} />
      ) : (
        <LoginButton variant="contained" onClick={() => openDialog()}>
          Login
        </LoginButton>
      )}
      <Become>Become a Seller</Become>
      <More>More</More>

      <Container to="/cart">
        <Badge color="secondary">
          <ShoppingCart />
        </Badge>
        <Typography style={{ marginLeft: "0.625rem" }}>Cart</Typography>
      </Container>

      <LoginDialog open={open} setOpen={setOpen} setAccount={setAccount} />
    </Wrapper>
  );
};

export default CustomButtons;
