import { AppBar, Toolbar, Box, Typography, styled } from "@mui/material";
import CustomButtons from "./CustomButtons";
import Search from "./Search";

//AppBar Component Styling
const SHeader = styled(AppBar)`
  background: #2874f0;
  height: 55px;
`;
//Box Component Styling

const Component = styled(Box)`
  margin-left: 12%;
  line-height: 0;
`;
//Typography Component Styling

const LogoText = styled(Typography)`
  font-size: 10px;
  font-style: italic;
`;
//image Styling

const StarImage = styled("img")({
  width: 10,
  height: 10,
  marginLeft: 4,
});

const CustomButtonWrapper = styled("span")`
  margin: "0 5% 0 auto";
`;

const Header = () => {
  const logoURL =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png";
  const starURL =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png";

  return (
    <SHeader>
      <Toolbar style={{ minHeight: 55 }}>
        <Component>
          <img src={logoURL} style={{ width: 75 }} />
          <Box style={{ display: "flex" }}>
            <LogoText>
              Explore&nbsp;
              <Box component="span" style={{ color: "#FFE500" }}>
                Plus
              </Box>
            </LogoText>
            <StarImage src={starURL} />
          </Box>
        </Component>
        <Search></Search>
        <Box>
          <CustomButtonWrapper>
            <CustomButtons />
          </CustomButtonWrapper>
        </Box>
      </Toolbar>
    </SHeader>
  );
};

export default Header;
