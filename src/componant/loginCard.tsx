import React from 'react';
import { Button, Paper, Typography } from '@mui/material';

interface LoginCardProps {
  onLogin: () => void;
}

const LoginCard: React.FC<LoginCardProps> = ({ onLogin }) => {
  return (
    <Paper
      elevation={3}
      sx={{
        padding: 6,
        borderRadius: 4,
        textAlign: 'center',
        minWidth: 300,
      }}
    >
      <Typography variant="h5" fontWeight="bold" mb={4}>
        Welcome Back
      </Typography>

      <Button
        variant="contained"
        color="primary"
        size="large"
        onClick={onLogin}
        sx={{ borderRadius: 3, textTransform: 'none', px: 5 }}
      >
        Login
      </Button>
    </Paper>
  );
};

export default LoginCard;
