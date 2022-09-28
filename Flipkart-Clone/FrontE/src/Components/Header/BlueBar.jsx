import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  IconButton,
  Drawer,
  List,
  styled,
} from "@mui/material";
import { Menu } from "@mui/icons-material";
import { useState } from "react";
import { Link } from "react-router-dom";

import CustomButtons from "./CustomButtons";
import Search from "./Search";

const StyleBar = styled(AppBar)`
  background: #2874f0;
  height: 3.4375rem;
`;

const Component = styled(Link)`
  margin-left: 12%;
  line-height: 0;
  color: #ffffff;
  text-decoration: none;
`;

const SubHeading = styled(Typography)`
  font-size: 0.625rem;
  font-style: italic;
`;

const PlusImage = styled("img")({
  width: "0.625rem",
  height: "0.625rem",
  marginLeft: "0.25rem",
});

const MenuButton = styled(IconButton)(({ theme }) => ({
  display: "none",
  [theme.breakpoints.down("sm")]: {
    display: "block",
  },
}));

const CustomButtonWrapper = styled("span")(({ theme }) => ({
  margin: "0 5% 0 1%",
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
}));

const BlueBar = () => {
  const logoURL =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png";
  const subURL =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png";

  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const list = () => (
    <Box onClick={handleClose}>
      <List>
        <listItem>
          <CustomButtons />
        </listItem>
      </List>
    </Box>
  );

  return (
    <StyleBar position="fixed">
      <Toolbar style={{ minHeight: "3.4375rem" }}>
        {/* ======================   Menu Button [down sm] ========================= */}
        <MenuButton color="inherit" onClick={handleOpen}>
          <Menu />
        </MenuButton>
        <Drawer open={open} onClose={handleClose}>
          {list()}
        </Drawer>
        {/* ======================   Menu Button End [down sm] ========================= */}

        {/* ======================   LOGO   ========================= */}

        <Component to="/">
          <img src={logoURL} style={{ width: "4.6875rem" }} alt="logo" />
          <Box component="span" style={{ display: "flex" }}>
            <SubHeading>
              Explore&nbsp;
              <Box component="span" style={{ color: "#FFE500" }}>
                Plus
              </Box>
            </SubHeading>
            <PlusImage src={subURL} />
          </Box>
        </Component>
        {/* ======================   LOGO End   ========================= */}

        {/* ======================   Search and custon button on app bar  ========================= */}

        <Search />
        <CustomButtonWrapper>
          <CustomButtons />
        </CustomButtonWrapper>
        {/* ======================   Search and custon button on app bar End   ========================= */}
      </Toolbar>
    </StyleBar>
  );
};

export default BlueBar;
