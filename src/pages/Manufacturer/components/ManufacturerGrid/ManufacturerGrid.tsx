import { FC, useContext } from 'react';

import { LinearProgress } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

import { ManufacturerContext } from '../../../../contexts';
import { ManufacturerDetailModalButton } from '../../../ManufacturerDetail';
import { Pagination } from '../Pagination';
import { GridContainer } from './styled';

export const ManufacturerGrid: FC = () => {
  const { data: rows, loading, page, count } = useContext(ManufacturerContext);

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
      renderCell: ManufacturerDetailModalButton,
    },
  ];

  return (
    <GridContainer>
      <DataGrid
        rows={rows}
        columns={columns}
        loading={loading}
        components={{
          LoadingOverlay: LinearProgress,
          Pagination,
        }}
        page={page}
        rowCount={count || 0}
        disableColumnMenu
        disableSelectionOnClick
        paginationMode="server"
      />
    </GridContainer>
  );
};
