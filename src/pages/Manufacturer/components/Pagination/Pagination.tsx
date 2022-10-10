import { FC, ReactElement, useContext } from 'react';

import { Pagination as MuiPagination, PaginationItem, PaginationRenderItemParams } from '@mui/material';

import { ManufacturerContext } from '../../../../contexts';

export const Pagination: FC = () => {
  const { handlePageChange } = useContext(ManufacturerContext);

  const Renderitem = (item: PaginationRenderItemParams): ReactElement => (
    <PaginationItem {...item} disabled={false} />
  );

  return <MuiPagination onChange={handlePageChange} renderItem={Renderitem} />;
};
