import { FC } from 'react';

import { Container, CssBaseline } from '@mui/material';

import { Header } from './components';
import { ModalContextProvider } from './contexts';
import { Manufacturer } from './pages';

import '@fontsource/roboto/400.css';
import './config/ApiConfig';

export const App: FC = () => (
  <ModalContextProvider>
    <CssBaseline />
    <Header />
    <Container component="main" maxWidth="md">
      <Manufacturer />
    </Container>
  </ModalContextProvider>
);
