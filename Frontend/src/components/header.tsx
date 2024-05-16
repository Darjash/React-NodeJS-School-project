/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React from 'react';
import { Box, Button, IconButton, Link, Modal, Stack, Typography } from '@mui/material';
import { Link as Link2 } from 'react-router-dom';
import SourceOutlinedIcon from '@mui/icons-material/SourceOutlined';
import { useTranslation } from 'react-i18next';
import i18n from '../i18n';

export function Header() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { t } = useTranslation();
  return (
    <Box sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '90px',
          paddingY: '30px',
          backgroundColor: '#061A48',
      }}
    >
      <Stack sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              height: '60px',
              alignItems: 'center',
              padding: '10px',
          }}
      >
        <Button
          component={Link2}
          to="/"
          sx={{ fontWeight: 'bold' }}
        > <Typography sx={{ color: 'white', fontWeight: 'bold' }}>OAuth 2.0 </Typography>
        </Button>
        <IconButton
          onClick={handleOpen}
          sx={{ color: 'grey' }}
        >
          <SourceOutlinedIcon />
        </IconButton>
        <Stack sx={{
              display: 'flex',
              alignItems: 'left',
              fontSize: '30px',
              marginRight: '10px'
          }}
        >
          <Box>
            <Button
              component={Link2}
              to="/quiz"
              sx={{ color: 'white' }}
            >{t('test')}
            </Button>
            <Button
              component={Link2}
              to="/authResults"
              sx={{ color: 'white' }}
            >{t('results')}
            </Button>
          </Box>
        </Stack>
      </Stack>

      <Stack sx={{
              display: 'flex',
              alignItems: 'center',
              fontSize: '30px',
              marginRight: '10px',

          }}
      >
        <Box>
          <Button variant="outlined" sx={{ color: 'white', margin: '4px' }} onClick={() => i18n.changeLanguage('est')}>EST</Button>
          <Button variant="outlined" sx={{ color: 'white', margin: '4px' }} onClick={() => i18n.changeLanguage('ru')}>RUS</Button>
        </Box>
      </Stack>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{
          position: 'absolute' as const,
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '90%',
          maxWidth: 600,
          bgcolor: 'background.paper',
          boxShadow: 24,
          p: 4,
          overflowY: 'auto' }}
        >
          <Typography variant="h6">
            {t('links')}
          </Typography>
          <Typography sx={{ margin: '6px', display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <Link href="https://auth0.com/intro-to-iam/what-is-oauth-2">https://auth0.com/intro-to-iam/what-is-oauth-2</Link>
            <Link href="https://arxiv.org/abs/2001.10461">https://arxiv.org/abs/2001.10461</Link>
            <Link href="https://auth0.com/docs/authenticate/protocols/oauth">https://auth0.com/docs/authenticate/protocols/oauth</Link>
            <Link href="https://www.oauth.com/oauth2-servers/getting-ready/">https://www.oauth.com/oauth2-servers/getting-ready/</Link>
            <Link href="https://www.oauth.com/oauth2-servers/accessing-data/create-an-application/">https://www.oauth.com/oauth2-servers/accessing-data/create-an-application/</Link>
            <Link href="https://developer.okta.com/blog/2018/04/10/oauth-authorization-code-grant-type">https://developer.okta.com/blog/2018/04/10/oauth-authorization-code-grant-type</Link>
            <Link href="https://auth0.com/docs/get-started/authentication-and-authorization-flow/authorization-code-flow">https://auth0.com/docs/get-started/authentication-and-authorization-flow/authorization-code-flow</Link>
            <Link href="https://www.oauth.com/oauth2-servers/making-authenticated-requests/">https://www.oauth.com/oauth2-servers/making-authenticated-requests/</Link>
          </Typography>
        </Box>
      </Modal>

    </Box>
  );
}
