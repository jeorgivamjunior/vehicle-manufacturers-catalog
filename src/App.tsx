import '@fontsource/roboto/400.css';
import './config/ApiConfig';

import { FC } from 'react';

import { Container, CssBaseline } from '@mui/material';

import { Header } from './components';
import { ModalContextProvider, ManufacturerContextProvider } from './contexts';
import { Manufacturer } from './pages';

export const App: FC = () => (
  <ModalContextProvider>
    <ManufacturerContextProvider>
      <CssBaseline />
      <Header />
      <Container component="main" maxWidth="md">
        <Manufacturer />
      </Container>
    </ManufacturerContextProvider>
  </ModalContextProvider>
);
