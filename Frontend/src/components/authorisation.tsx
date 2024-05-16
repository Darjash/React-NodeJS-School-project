import { Box, Button, Card, IconButton, TextField, Typography, useMediaQuery, useTheme } from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { useTranslation } from 'react-i18next';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

export function Authorisation() {
  const navigate = useNavigate();
  const handleClick = () => {
      setSuccess(<CheckCircleOutlineIcon color="success" fontSize="large" />);
      setTimeout(() => {
        navigate('/permission');
      }, 500);
};

const [success, setSuccess] = useState(<Box />);
const { t } = useTranslation();
const theme = useTheme();
const isSmallScreen = useMediaQuery(theme.breakpoints.down('xs'));

return (
  <Box sx={{ display: 'flex',
            alignItems: 'center',
            margin: isSmallScreen ? '5px' : '20px',
            marginTop: isSmallScreen ? '15px' : '50px',
            flexDirection: 'column' }}
  >
    <Box sx={{
      marginBottom: '6px',
      display: 'flex',
      gap: '6px'
    }}
    >
      <IconButton onClick={() => (navigate('/'))}>
        <KeyboardArrowLeftIcon />
      </IconButton>
      <IconButton>
        <KeyboardArrowRightIcon onClick={() => (navigate('/permission'))} />
      </IconButton>
    </Box>
    <Card
      sx={{ width: isSmallScreen ? '100%' : '600px',
      padding: isSmallScreen ? '5px' : '20px',
      textAlign: 'center',
      boxShadow: '4' }}
    >
      <Typography
        variant="h5"
        sx={{ marginBottom: '5%' }}
      >{t('2title')}
      </Typography>
      <Typography
        sx={{ marginBottom: '40px',
              textAlign: 'justify' }}
      >
        {t('2.1info')}
      </Typography>
      <Card sx={{ padding: '8%'
      }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: '20px', gap: '3%' }}>
          <TextField
            required
            label="Login"
            id="outlined-required"
            disabled
            defaultValue="login"
          />
          <TextField
            required
            disabled
            id="outlined-required"
            type="password"
            label="Password"
            defaultValue="password"
          />
        </Box>

        <Box sx={{ height: '40px' }}>{success}</Box>
        <Button onClick={() => handleClick()}>
          Login <ArrowForwardIcon fontSize="small" />
        </Button>
      </Card>
    </Card>
  </Box>
);
}
