import { CssBaseline, ThemeProvider } from '@mui/material';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import React from 'react';
import { Header } from './components/header';
import { MainPage } from './components/oauth2.0-info-page-intro';
import { Authorisation } from './components/oauth2.0-info-page-authorisation';
import { Permission } from './components/oauth2.0-info-page-permission';
import { GetCode } from './components/oauth2.0-info-page-code';
import { GetToken } from './components/oauth2.0-info-page-token';
import { theme } from './theme';
import { Quiz } from './components/quiz';
import { ResultsPage } from './components/QuizResults/results-page';
import { LoginPage } from './components/QuizResults/results-page-login';
import { Header2 } from './components/QuizResults/results-page-header';

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
