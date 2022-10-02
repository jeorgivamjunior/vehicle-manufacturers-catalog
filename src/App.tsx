import { FC } from 'react';

import { Container, CssBaseline } from '@mui/material';

import { Header } from './components';
import { Manufacturer } from './pages';

import '@fontsource/roboto/400.css';

export const App: FC = () => {
  return (
    <>
      <Header />
      <Container component="main" maxWidth="sm">
        <CssBaseline />
        <Manufacturer />
      </Container>
    </>
  );
};
