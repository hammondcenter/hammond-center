// AccountMenu.js
import React, { useState } from 'react';
import { Button, Menu, MenuItem } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const AccountMenu = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleProfileClick = () => {
    // Navigate to the user's profile page
    navigate('/profile');
    handleClose();
  };

  const handleLogoutClick = () => {
    // Add logic to handle logout
    // Then navigate to the login page
    navigate('/login');
    handleClose();
  };

  return (
    <div>
      <Button
        aria-controls="account-menu"
        aria-haspopup="true"
        onClick={handleClick}
        color="inherit"
      >
        Account
      </Button>
      <Menu
        id="account-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleProfileClick}>Profile</MenuItem>
        <MenuItem onClick={handleLogoutClick}>Logout</MenuItem>
      </Menu>
    </div>
  );
};

export default AccountMenu;
