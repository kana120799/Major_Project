import { Box, styled } from "@mui/material";

import Slide from "./Slide";

const Component = styled(Box)`
  display: flex;
`;

const LeftComponent = styled(Box)(({ theme }) => ({
  width: "83%",
  [theme.breakpoints.down("md")]: {
    width: "100%",
  },
}));

const RightComponent = styled(Box)(({ theme }) => ({
  marginTop: 5,
  background: "#FFFFFF",
  width: "17%",
  marginLeft: "0.625rem",
  padding: "0.3125rem",
  textAlign: "center",
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

const MidSlide = ({ products }) => {
  const adURL =
    "https://rukminim1.flixcart.com/flap/464/708/image/633789f7def60050.jpg?q=70";

  return (
    <Component>
      <LeftComponent>
        <Slide
          data={products}
          title="Deals of the Day"
          timer={true}
          multi={true}
        />
      </LeftComponent>
      <RightComponent>
        <img src={adURL} style={{ width: 217 }} alt="MidSlide" />
      </RightComponent>
    </Component>
  );
};

export default MidSlide;
