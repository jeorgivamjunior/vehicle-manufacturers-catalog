import { FC } from 'react';

import { GridCellParams } from '@mui/x-data-grid';

import { ManufacturerDetailModalButton } from '../../../ManufacturerDetail';

export const ViewButton: FC<GridCellParams> = ({ row: manufacturer }) => {
  return <ManufacturerDetailModalButton manufacturer={manufacturer} />;
};
