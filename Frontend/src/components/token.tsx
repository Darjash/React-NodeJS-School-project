/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Box, Button, Card, IconButton, Typography, useMediaQuery, useTheme } from '@mui/material';
import { CodeBlock } from 'react-code-blocks';
import React from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useNavigate } from 'react-router-dom';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { useTranslation } from 'react-i18next';

export function GetToken() {
   const code = `POST /resource/1/update HTTP/1.1
Authorization: Bearer RsT5OjbzRn430zqMLgV3Ia"
Host: api.authorization-server.com

description=Hello+World`;
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('xs'));
  const navigate = useNavigate();
  const handleClick = () => {
      navigate('/quiz');
};
const { t } = useTranslation();
  return (
    <Box sx={{
      display: 'flex',
      alignItems: 'center',
      margin: isSmallScreen ? '5px' : '20px',
      marginTop: isSmallScreen ? '15px' : '50px',
      flexDirection: 'column'
    }}
    >
      <Box sx={{
      marginBottom: '6px',
    }}
      >
        <IconButton onClick={() => (navigate('/redirect_page'))}>
          <KeyboardArrowLeftIcon />
        </IconButton>
      </Box>
      <Card sx={{ padding: isSmallScreen ? '5px' : '20px',
      display: 'flex',
      boxShadow: '4',
      flexDirection: 'column',
      textAlign: 'center',
      marginBottom: '20px',
      width: '100%',
      maxWidth: '800px' }}
      >
        <Box sx={{ display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '20px' }}
        >
          <Typography variant="h5">{t('5title')}</Typography>
          <Box sx={{ display: 'flex',
          flexDirection: 'column',
          width: '100%',
          height: 'auto',
          overflow: 'auto' }}
          >
            <Box sx={{ display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '20px',
            textAlign: 'justify' }}
            >
              <Typography>{t('5.1info')}
              </Typography>
              <Typography>{t('5.2info')}</Typography>
              <Box sx={{ width: '95%' }}>
                <Typography>{t('grant_type')}
                </Typography>
                <Typography>{t('code')}
                </Typography>
                <Typography>{t('redirect_uri')}
                </Typography>
                <Typography>{t('client_id')}
                </Typography>
              </Box>
              <Typography>{t('5.3info')}
              </Typography>
              <Typography>{t('5.4info')}
              </Typography>
              <Typography sx={{ width: '95%' }}><CodeBlock text={code} showLineNumbers={false} />
              </Typography>
              <Button onClick={() => handleClick()}>{t('5button')}<ArrowForwardIcon fontSize="small" /> </Button>
            </Box>
          </Box>
        </Box>
      </Card>
    </Box>
  );
}

// https://developer.okta.com/docs/guides/implement-grant-type/authcode/main/#request-an-authorization-code
