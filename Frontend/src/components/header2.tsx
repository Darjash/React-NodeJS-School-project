import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import { Link as Link2, useLocation, useNavigate } from 'react-router-dom';

export function Header2() {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/authResults');
};
  const location = useLocation();
  return (
    <Box sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '90px',
          padding: '30px',
          backgroundColor: '#061A48',
      }}
    >
      <Button
        component={Link2}
        to="/"
        sx={{ fontWeight: 'bold' }}
      > <Typography sx={{ color: 'white', fontWeight: 'bold' }}>OAuth 2.0 </Typography>
      </Button>
      {location.pathname === '/results' && (
        <Button
          onClick={() => handleLogout()}
          sx={{ fontWeight: 'bold' }}
        > <Typography sx={{ color: 'white', fontWeight: 'bold' }}>Logout</Typography>
        </Button>
)}
    </Box>
  );
}
