import React, { useState, useEffect } from "react";

import {
  Dialog,
  DialogContent,
  TextField,
  Box,
  Button,
  Typography,
  styled,
} from "@mui/material";

import { authenticateLogin, authenticateSignup } from "../../service/api";

const Component = styled(DialogContent)`
  height: 80vh;
  width: 95vh;
  padding: 0;
  padding-top: 0;
`;

const LoginButton = styled(Button)`
  text-transform: none;
  background: #fb641b;
  color: #fff;
  height: 3rem;
  border-radius: 2px;
`;

const RequestOTP = styled(Button)`
  text-transform: none;
  background: #fff;
  color: #2874f0;
  height: 3rem;
  border-radius: 2px;
  box-shadow: 0 0.125rem 0.25rem 0 rgb(0 0 0 / 20%);
`;

const Text = styled(Typography)`
  color: #878787;
  font-size: 0.75rem;
`;

const CreateAccount = styled(Typography)`
  margin: auto 0 0.3125rem 0;
  text-align: center;
  color: #2874f0;
  font-weight: 600;
  font-size: 0.875rem;
  cursor: pointer;
`;

const Wrapper = styled(Box)`
  padding: 1.5625rem 2.1875rem;
  display: flex;
  flex: 1;
  overflow: auto;
  flex-direction: column;
  & > div,
  & > button,
  & > p {
    margin-top: 1.25rem;
  }
`;

const Error = styled(Typography)`
  font-size: 0.625rem;
  color: #ff6161;
  line-height: 0;
  margin-top: 0.625rem;
  font-weight: 600;
`;

const Image = styled(Box)`
  background: #2874f0
    url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png)
    center 85% no-repeat;
  width: 40%;
  height: 100%;
  padding: 2.8125rem 2.1875rem;
  & > p,
  & > h5 {
    color: #ffffff;
    font-weight: 600;
  }
`;

const loginInitialValues = {
  username: "",
  password: "",
};

const signupInitialValues = {
  firstname: "",
  lastname: "",
  username: "",
  email: "",
  password: "",
  phone: "",
};

const accountInitialValues = {
  login: {
    view: "login",
    heading: "Login",
    subHeading: "Get access to your Orders, Wishlist and Recommendations",
  },
  signup: {
    view: "signup",
    heading: "Looks like you're new here",
    subHeading: "Signup to get started",
  },
};

const LoginDialog = ({ open, setOpen, setAccount }) => {
  const [login, setLogin] = useState(loginInitialValues);
  const [signup, setSignup] = useState(signupInitialValues);
  const [error, showError] = useState(false);
  const [LoginOrSignUp, toggleAccount] = useState(accountInitialValues.login);

  useEffect(() => {
    showError(false);
  }, [login]);
  // Login
  const onValueChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };
  // SignUp
  const onInputChange = (e) => {
    setSignup({ ...signup, [e.target.name]: e.target.value });
  };

  const loginUser = async () => {
    let response = await authenticateLogin(login);
    if (!response) showError(true);
    else {
      showError(false);
      handleClose();
      console.log("from lofin56544", login.username);
      setAccount(response.data);
    }
  };

  function signupvalidation() {
    for (var len in signup) {
      if (signup[len].length <= 0) {
        showError(true);
        return false;
      }
    }
    showError(false);
    return true;
  }

  const signupUser = async () => {
    if (signupvalidation()) {
      let response = await authenticateSignup(signup);
      if (!response) showError(true);
      showError(false);
      handleClose();
      setAccount(signup.username);
    }
  };

  const toggleSignup = () => {
    toggleAccount(accountInitialValues.signup);
  };

  const handleClose = () => {
    setOpen(false);
    showError(false);
    toggleAccount(accountInitialValues.login);
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      PaperProps={{ sx: { maxWidth: "unset" } }}
    >
      <Component>
        <Box style={{ display: "flex", height: "100%" }}>
          <Image>
            <Typography variant="h5">{LoginOrSignUp.heading}</Typography>
            <Typography style={{ marginTop: "1.25rem" }}>
              {LoginOrSignUp.subHeading}
            </Typography>
          </Image>
          {LoginOrSignUp.view === "login" ? (
            <Wrapper>
              <TextField
                variant="standard"
                onChange={(e) => onValueChange(e)}
                name="username"
                label="Enter Email/Mobile number"
              />
              {error && (
                <Error>Please enter valid Email ID/Mobile number</Error>
              )}
              <TextField
                variant="standard"
                onChange={(e) => onValueChange(e)}
                name="password"
                label="Enter Password"
              />
              <Text>
                By continuing, you agree to Flipkart's Terms of Use and Privacy
                Policy.
              </Text>
              <LoginButton onClick={() => loginUser()}>Login</LoginButton>
              <Text style={{ textAlign: "center" }}>OR</Text>
              <RequestOTP>Request OTP</RequestOTP>
              <CreateAccount onClick={() => toggleSignup()}>
                New to Flipkart? Create an account
              </CreateAccount>
            </Wrapper>
          ) : (
            <Wrapper>
              <TextField
                variant="standard"
                onChange={(e) => onInputChange(e)}
                name="firstname"
                label="Enter Firstname"
                size="small"
              />
              {error && !signup.firstname.length && (
                <Error> Please enter valid firstname</Error>
              )}
              <TextField
                variant="standard"
                onChange={(e) => onInputChange(e)}
                name="lastname"
                label="Enter Lastname"
                size="small"
              />
              {error && !signup.lastname.length && (
                <Error> Please enter valid lastname</Error>
              )}
              <TextField
                variant="standard"
                onChange={(e) => onInputChange(e)}
                name="username"
                label="Enter Username"
                size="small"
              />
              {error && !signup.username.length && (
                <Error> Please enter valid username</Error>
              )}
              <TextField
                variant="standard"
                onChange={(e) => onInputChange(e)}
                name="email"
                label="Enter Email"
                size="small"
              />
              {error && !signup.email.length && (
                <Error> Please enter valid email</Error>
              )}
              <TextField
                variant="standard"
                onChange={(e) => onInputChange(e)}
                name="password"
                label="Enter Password"
                size="small"
              />
              {error && !signup.password.length && (
                <Error> Please enter valid password</Error>
              )}
              <TextField
                variant="standard"
                onChange={(e) => onInputChange(e)}
                name="phone"
                label="Enter Phone"
                size="small"
              />
              {error && !signup.phone.length && (
                <Error> Please enter valid phone</Error>
              )}
              <LoginButton onClick={() => signupUser()}>Continue</LoginButton>
            </Wrapper>
          )}
        </Box>
      </Component>
    </Dialog>
  );
};

export default LoginDialog;
