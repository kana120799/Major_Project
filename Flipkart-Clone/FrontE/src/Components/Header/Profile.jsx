import { useState } from "react";

import { Typography, Menu, MenuItem, Box, styled } from "@mui/material";
import { PowerSettingsNew } from "@mui/icons-material";

const Component = styled(Menu)`
  margin-top: 0.3125rem;
`;

const Logout = styled(Typography)`
  font-size: 0.875 rem;
  margin-left: 1.25rem;
`;

const Profile = ({ account, setAccount }) => {
  const [open, setOpen] = useState(false);

  const handleClick = (event) => {
    setOpen(event.currentTarget);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const logout = () => {
    setAccount("");
  };

  return (
    <>
      <Box onClick={handleClick}>
        <Typography style={{ marginTop: "0.125rem" }}>{account}</Typography>
      </Box>
      <Component anchorEl={open} open={Boolean(open)} onClose={handleClose}>
        <MenuItem
          onClick={() => {
            handleClose();
            logout();
          }}
        >
          <PowerSettingsNew fontSize="small" color="primary" />
          <Logout>Logout</Logout>
        </MenuItem>
      </Component>
    </>
  );
};

export default Profile;
