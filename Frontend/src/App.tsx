import { CssBaseline, ThemeProvider } from '@mui/material';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import React from 'react';
import { Header } from './components/header';
import { MainPage } from './components/mainPage';
import { Authorisation } from './components/authorisation';
import { Permission } from './components/permission';
import { GetCode } from './components/code';
import { GetToken } from './components/token';
import { theme } from './theme';
import { Quiz } from './components/quiz';
import { ResultsPage } from './components/resultsPage';
import { LoginPage } from './components/login';
import { Header2 } from './components/header2';

export default function App() {
  return (
    <BrowserRouter>
      <CssBaseline>
        <ThemeProvider theme={theme}>
          <Routes>
            <Route
              index
              element={(
                <>
                  <Header />
                  <MainPage />
                </>
)}
            />
            <Route
              path="/authorisation"
              element={(
                <><Header />
                  <Authorisation />
                </>
)}
            />
            <Route
              path="/permission"
              element={(
                <><Header />
                  <Permission />
                </>
)}
            />
            <Route
              path="/redirect_page"
              element={(
                <> <Header />
                  <GetCode />
                </>
)}
            />
            <Route
              path="/gettoken"
              element={(
                <> <Header />
                  <GetToken />
                </>
)}
            />
            <Route
              path="/quiz"
              element={(
                <> <Header />
                  <Quiz />
                </>
)}
            />
            <Route
              path="/results"
              element={(
                <>
                  <Header2 />
                  <ResultsPage />
                </>
)}
            />
            <Route
              path="/authResults"
              element={(
                <>
                  <Header2 />
                  <LoginPage />
                </>
)}
            />
          </Routes>
        </ThemeProvider>
      </CssBaseline>
    </BrowserRouter>

  );
}
