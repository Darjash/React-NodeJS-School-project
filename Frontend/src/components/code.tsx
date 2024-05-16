/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Box, Button, Card, IconButton, Typography, useMediaQuery } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import React from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { useTranslation } from 'react-i18next';
import { CodeBlock } from 'react-code-blocks';
import { theme } from '../theme';

export function GetCode() {
  const navigate = useNavigate();
  const handleClick = () => {
      navigate('/gettoken');
};
const { t } = useTranslation();
const code = `https://example-app.com/redirect?
code=g0ZGZmNjVmOWIjNTk2NTk4ZTYyZGI3&
state=xcoiv98y2kd22vusuye3kch`;
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
      <IconButton onClick={() => (navigate('/permission'))}>
        <KeyboardArrowLeftIcon />
      </IconButton>
      <IconButton>
        <KeyboardArrowRightIcon onClick={() => (navigate('/gettoken'))} />
      </IconButton>
    </Box>
    <Card sx={{
    padding: isSmallScreen ? '5px' : '20px',
    display: 'flex',
    boxShadow: '4',
    flexDirection: 'column',
    marginBottom: '20px',
    width: '100%',
    maxWidth: '800px' }}
    >
      <Typography
        variant="h5"
        sx={{ textAlign: 'center',
        marginBottom: '20px' }}
      >{t('4title')}
      </Typography>
      <Typography sx={{ marginBottom: '20px',
        textAlign: 'justify' }}
      >
        {t('4.1info')}
      </Typography>
      <Typography sx={{ marginBottom: '20px',
        textAlign: 'justify' }}
      >
        <CodeBlock text={code} showLineNumbers={false} />
      </Typography>
      <Box sx={{ display: 'flex',
        flexDirection: 'column',
        marginBottom: '20px' }}
      >
        <Typography sx={{ width: '100%',
        textAlign: 'justify',
        marginBottom: '20px' }}
        >{t('4.2info')}
        </Typography>
        <Button onClick={() => handleClick()}>{t('4button')}<ArrowForwardIcon fontSize="small" /> </Button>
      </Box>
    </Card>
  </Box>
);
}
