/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { FC, useEffect, useRef, useState } from 'react';

import VisibilityRoundedIcon from '@mui/icons-material/VisibilityRounded';
import { Box, Container, IconButton, Link, Typography } from '@mui/material';
import LinearProgress from '@mui/material/LinearProgress';
import { DataGrid } from '@mui/x-data-grid';
import { useDemoData, getRealGridData, getCommodityColumns } from '@mui/x-data-grid-generator';
import { GridCellParams } from '@mui/x-data-grid-pro';

import { GridContainer } from './styled';

const MAX_ROW_LENGTH = 500;

async function sleep(duration: number) {
  return await new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve();
    }, duration);
  });
}

export const Manufacturer: FC = () => {
  const [loading, setLoading] = useState(false);
  const [loadedRows, setLoadedRows] = useState<any>([]);
  const mounted = useRef(true);
  let { data } = useDemoData({
    dataSet: 'Commodity',
    rowLength: 20,
    maxColumns: 4,
  });

  const loadServerRows = async (newRowLength: number) => {
    setLoading(true);
    const newData = await getRealGridData(newRowLength, getCommodityColumns());
    // Simulate network throttle
    await sleep(Math.random() * 500 + 100);

    if (mounted.current) {
      setLoading(false);
      setLoadedRows(loadedRows.concat(newData.rows));
    }
  };

  const handleOnRowsScrollEnd = (params: any) => {
    if (loadedRows.length <= MAX_ROW_LENGTH) {
      loadServerRows(params.viewportPageSize);
    }
  };

  useEffect(() => {
    return () => {
      mounted.current = true;
    };
  }, []);

  data = {
    ...data,
    columns: [
      ...data.columns,
      {
        field: 'view',
        headerName: 'View',
        flex: 1,
        filterable: false,
        sortable: false,
        align: 'center',
        headerAlign: 'center',
        renderCell: ViewButton,
      },
    ],
  };

  return (
    <Container component="section">
      <GridContainer>
        <DataGrid
          {...data}
          rows={data.rows.concat(loadedRows)}
          loading={loading}
          components={{
            LoadingOverlay: LinearProgress,
          }}
        />
      </GridContainer>
    </Container>
  );
};

const ViewButton = ({ row }: GridCellParams) => (
  <IconButton color="success">
    <VisibilityRoundedIcon />
  </IconButton>
);
