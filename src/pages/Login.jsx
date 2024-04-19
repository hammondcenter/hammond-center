// LoginPage.js
import React from 'react';
import { Paper, Typography, TextField, Button, Grid, Avatar } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

const LoginPage = () => {
  return (
    <Grid container justifyContent="center" alignItems="center" style={{ height: '100vh' }}>
      <Grid item xs={10} sm={8} md={6} lg={4}>
        <Paper elevation={3} style={{ padding: '20px', textAlign: 'center' }}>
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography variant="h5" component="div" gutterBottom>
            Login
          </Typography>

          {/* Login Form */}
          <form>
            <TextField
              label="Email"
              type="email"
              fullWidth
              margin="normal"
              required
              // Add appropriate event handlers and state management
            />
            <TextField
              label="Password"
              type="password"
              fullWidth
              margin="normal"
              required
              // Add appropriate event handlers and state management
            />
            <Button variant="contained" color="primary" type="submit" fullWidth>
              Login
            </Button>
          </form>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default LoginPage;
