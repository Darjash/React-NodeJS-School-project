/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Box, Button, Card, IconButton, List, ListItem, Typography, useMediaQuery } from '@mui/material';
import { CodeBlock } from 'react-code-blocks';
import { useNavigate } from 'react-router-dom';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { useTranslation } from 'react-i18next';
import CheckIcon from '@mui/icons-material/Check';
import React, { useState } from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { theme } from '../theme';

export function MainPage() {
  const navigate = useNavigate();
  const handleClick = () => {
      navigate('/authorisation');
};
  const code = `  
  https://authorization-server.com/auth?
  response_type=code&
  client_id=2935d291598237&
  redirect_uri=https%3A%2F%2Fexample-app.com%2Fcallback&
  scope=create&
  state=xcoiv98y2kd22vusuye3kch
  `;
const [icon, setIcon] = useState(<ContentCopyIcon fontSize="small" />);
const { t } = useTranslation();
const isSmallScreen = useMediaQuery(theme.breakpoints.down('xs'));

return (
  <Box
    sx={{
      display: 'flex',
      justifyContent: 'center',
      margin: isSmallScreen ? '5px' : '20px',
      marginTop: isSmallScreen ? '15px' : '50px',
    }}
  >

    <Card
      sx={{
        padding: isSmallScreen ? '5px' : '20px',
        boxShadow: '4',
      }}
    >

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '20px',
        }}
      >
        <Typography
          sx={{
            width: '100%',
            maxWidth: '800px',
            fontWeight: 'bold',
            textAlign: 'center',
          }}
        >
          <Typography sx={{ marginBottom: '20px' }} variant="h5"> Oauth 2.0 </Typography>
          {t('title')}
        </Typography>
        <Typography
          sx={{
            width: '100%',
            maxWidth: '900px',
            textAlign: 'justify',
          }}
        >
          <Typography sx={{
          // width: '800px',
          textAlign: 'justify',
        }}
          >{t('description')}
            <List>

              <Typography sx={{ fontWeight: 'bold', marginTop: '20px', }}>{t('roles')}</Typography>
              <ListItem>
                <Typography>{t('owner')}
                </Typography>
              </ListItem>
              <ListItem>
                <Typography>{t('client')}
                </Typography>
              </ListItem>
              <ListItem>
                <Typography>{t('authServer')}
                </Typography>
              </ListItem>
              <ListItem>
                <Typography>{t('resServer')}
                </Typography>
              </ListItem>
            </List>
            <Typography> {t('register')}</Typography>
            <Typography sx={{ marginTop: '20px' }}> {t('secret')}
            </Typography>
            <Typography sx={{ marginTop: '20px' }} dangerouslySetInnerHTML={{ __html: t('info').replace('“Authorization Code”', '<span style="font-weight: bold">“Authorization Code”</span>') }} />
            <Typography sx={{
                marginTop: '35px',
                textAlign: 'justify',
              }}
            > {t('url')}
              <IconButton
                onClick={() => {
                setIcon(<CheckIcon fontSize="small" color="success" />);
                    navigator.clipboard.writeText(code);
                    setTimeout(() => {
                      setIcon(<ContentCopyIcon fontSize="small" />);
                    }, 1000);
                  }}
              >
                {icon}
              </IconButton>
            </Typography>

            <CodeBlock
              text={code}
              showLineNumbers={false}
            />
            <Box sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: '10px'
            }}
            >
              <Typography>{t('url_response')}</Typography>
              <Typography>{t('url_client_id')}</Typography>
              <Typography>{t('url_redirect_uri')}</Typography>
              <Typography>{t('url_scope')}</Typography>
              <Typography>{t('url_state')}</Typography>

            </Box>
          </Typography>
        </Typography>
        <Button
          sx={{
          marginBottom: '10px'
        }}
          onClick={() => handleClick()}
        >
          {t('button')} <ArrowForwardIcon fontSize="small" />
        </Button>
      </Box>
    </Card>
  </Box>
);
}
