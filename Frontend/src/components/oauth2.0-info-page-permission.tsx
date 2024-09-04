/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Box, Button, Card, IconButton, Typography, useMediaQuery, useTheme } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import React from 'react';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { useTranslation } from 'react-i18next';

export function Permission() {
  const navigate = useNavigate();
  const handleClick = () => {
      navigate('/redirect_page?code=SplxlOBeZQQYbYS6WxSbIA');
};
const theme = useTheme();
const isSmallScreen = useMediaQuery(theme.breakpoints.down('xs'));
const { t } = useTranslation();

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
        <IconButton onClick={() => (navigate('/authorisation'))}>
          <KeyboardArrowLeftIcon />
        </IconButton>
        <IconButton>
          <KeyboardArrowRightIcon onClick={() => (navigate('/redirect_page'))} />
        </IconButton>
      </Box>
      <Card sx={{ width: isSmallScreen ? '100%' : '700px',
      padding: isSmallScreen ? '5px' : '20px',
      textAlign: 'center',
      boxShadow: '4', }}
      >
        <Typography
          variant="h5"
          sx={{ marginBottom: '20px' }}
        >
          {t('3title')}
        </Typography>
        <Typography sx={{ marginBottom: '20px',
        textAlign: 'justify' }}
        >
          {t('3.1info')}

        </Typography>
        <Typography
          sx={{ marginBottom: '20px',
        fontWeight: 'bold' }}
        >
          {t('3.2info')}
        </Typography>
        <Box sx={{ display: 'flex',
        justifyContent: 'center',
        marginBottom: '20px' }}
        >
          <Card sx={{ display: 'flex',
          flexDirection: 'column',
          width: isSmallScreen ? '90%' : '80%',
          height: 'auto',
          overflow: 'auto',
          boxShadow: '4' }}
          >
            <Box sx={{ display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '20px',
            margin: '20px' }}
            >
              <Typography sx={{ textAlign: 'justify',
              margin: isSmallScreen ? '5px' : '35px' }}
              >
                {t('3.3info')}
              </Typography>
              <Button sx={{ fontSize: 'small' }} onClick={() => handleClick()}>
                {t('3button')}<ArrowForwardIcon fontSize="small" />
              </Button>
            </Box>
          </Card>
        </Box>
      </Card>
    </Box>
  );
}
