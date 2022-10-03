import { FC } from 'react';

import { Container, Paper } from '@mui/material';

import { ManufacturerGrid } from './components/ManufacturerGrid';
import { ManufacturerContextProvider } from './contexts';

export const Manufacturer: FC = () => {
  return (
    <ManufacturerContextProvider>
      <Container component="section">
        <Paper elevation={3}>
          <ManufacturerGrid />
        </Paper>
      </Container>
    </ManufacturerContextProvider>
  );
};
