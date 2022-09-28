import { Typography, Box, styled } from "@mui/material";

import { navData } from "../../constant/data";

const Component = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  margin: "3.4375rem 8.125rem 0px 8.125rem !important",
  overflowX: "auto",
  [theme.breakpoints.down("lg")]: {
    margin: "0px !important",
  },
}));

const Container = styled(Box)`
  padding: 0.75rem 8px;
  text-align: center;
`;

const Text = styled(Typography)`
  font-size: 0.875rem;
  font-weight: 600;
  font-family: inherit;
`;

const NavBar = () => {
  return (
    <Component>
      {navData.map((ele, ind) => (
        <Container key={ind}>
          <img src={ele.url} style={{ width: "4rem" }} alt="nav" />
          <Text>{ele.text}</Text>
        </Container>
      ))}
    </Component>
  );
};

export default NavBar;
