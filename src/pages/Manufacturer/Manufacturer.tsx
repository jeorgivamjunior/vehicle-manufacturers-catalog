import { FC } from 'react';

import { Container, Paper } from '@mui/material';

import { ManufacturerGrid } from './components';

export const Manufacturer: FC = () => {
  return (
    <Container component="section">
      <Paper elevation={3}>
        <ManufacturerGrid />
      </Paper>
    </Container>
  );
};
