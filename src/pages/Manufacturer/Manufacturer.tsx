import { FC } from 'react';

import { Container, Paper } from '@mui/material';
import LinearProgress from '@mui/material/LinearProgress';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

import { ViewButton } from './components';
import { useManufacturerRequest } from './hooks';
import { GridContainer } from './styled';

export const Manufacturer: FC = () => {
  const { data: rows, loading } = useManufacturerRequest();

  const columns: GridColDef[] = [
    {
      field: 'Mfr_ID',
      headerName: 'ID',
    },
    {
      field: 'Mfr_CommonName',
      headerName: 'Common Name',
      flex: 1,
    },
    {
      field: 'Country',
      headerName: 'Country',
      flex: 1,
    },
    {
      field: 'view',
      headerName: 'View',
      type: 'actions',
      renderCell: ViewButton,
    },
  ];

  return (
    <Container component="section">
      <Paper elevation={3}>
        <GridContainer>
          <DataGrid
            rowsPerPageOptions={[]}
            disableColumnMenu
            disableSelectionOnClick
            loading={loading}
            components={{
              LoadingOverlay: LinearProgress,
            }}
            rows={rows}
            columns={columns}
          />
        </GridContainer>
      </Paper>
    </Container>
  );
};
