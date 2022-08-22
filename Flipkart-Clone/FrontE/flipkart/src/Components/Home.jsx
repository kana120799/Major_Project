import { Box, styled } from "@mui/material";
import NavBar from "./Home/NarBar";
import Banner from "./Home/Banner";

const Component = styled(Box)`
  padding: 20px 10px;
  background: #f2f2f2;
`;

const Home = () => {
  return (
    <>
      <NavBar />
      <Component>
        <Banner />
      </Component>
    </>
  );
};

export default Home;
