import { FC } from 'react';

import VisibilityRoundedIcon from '@mui/icons-material/VisibilityRounded';
import { IconButton } from '@mui/material';
import { GridCellParams } from '@mui/x-data-grid-pro';

export const ViewButton: FC<GridCellParams> = ({ row }) => (
  <IconButton color="success">
    <VisibilityRoundedIcon />
  </IconButton>
);
