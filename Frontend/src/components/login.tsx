import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Box, Button, Card, TextField, Typography, useMediaQuery } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { theme } from '../theme';

export function LoginPage() {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('xs'));
    const navigate = useNavigate();
    useEffect(() => {
      const token = localStorage.getItem('token');
      if (token) {
        navigate('/results');
      }
    }, [navigate]);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleSubmit = async (e:any) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3001/login', { login, password });
            const { token } = response.data;
            localStorage.setItem('token', token);
            axios.defaults.headers.common.Authorization = `Bearer ${token}`;
            navigate('/results');
        } catch (err) {
            setError('Vale kasutajatunnus või salasõna');
            console.error('Error:', err);
        }
    };

      return (
        <Box sx={{ display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: isSmallScreen ? '5px' : '20px',
    marginTop: isSmallScreen ? '15px' : '50px', }}
        >
          <Card sx={{
      width: isSmallScreen ? '100%' : '500px',
      padding: isSmallScreen ? '5px' : '20px',
      textAlign: 'center',
      boxShadow: '4', }}
          >
            <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            gap: '20px'
          }}
            >
              <Typography variant="h6">Logi sisse, et näha tulemusi</Typography>
              <TextField
                required
                label="Kasutajatunnus"
                id="outlined-required"
                value={login}
                onChange={(e) => setLogin(e.target.value)}
              />
              <TextField
                required
                type="password"
                id="outlined-required"
                label="Salasõna"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Button
                onClick={handleSubmit}
                type="submit"
              >
                <ArrowForwardIcon />
              </Button>
              <Typography sx={{
                height: '24px',
                color: 'red',
                opacity: '0.8'
              }}
              >{error}
              </Typography>
            </Box>
          </Card>
        </Box>
      );
}
