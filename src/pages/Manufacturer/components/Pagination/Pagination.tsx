import { FC, useContext } from 'react';

import { Pagination as MuiPagination, PaginationItem } from '@mui/material';
import { useGridApiContext, useGridSelector, gridPageSelector, gridPageCountSelector } from '@mui/x-data-grid';

import { ManufacturerContext } from '../../contexts';

export const Pagination: FC = () => {
  const { handlePageChange } = useContext(ManufacturerContext);

  const apiRef = useGridApiContext();
  const page = useGridSelector(apiRef, gridPageSelector);
  const pageCount = useGridSelector(apiRef, gridPageCountSelector);

  return (
    <MuiPagination onChange={handlePageChange} renderItem={(item) => <PaginationItem {...item} disabled={false} />} />
  );
};
