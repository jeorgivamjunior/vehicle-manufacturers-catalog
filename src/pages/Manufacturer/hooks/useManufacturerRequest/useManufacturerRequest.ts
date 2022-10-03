import { useEffect, useState } from 'react';

import useAxios from 'axios-hooks';

import { ManufacturerProps } from '../../../../types';
import { useManufacturerRequestProps } from './types';

export const useManufacturerRequest = (): useManufacturerRequestProps => {
  const [page, setPage] = useState(0);
  const [list, setList] = useState<ManufacturerProps[]>([]);
  const [{ data, loading }] = useAxios(`/vehicles/GetAllManufacturers?format=json&page=${page + 1}`);

  useEffect(() => {
    if (!data) return;

    setList(data.Results.map((item: ManufacturerProps) => ({ ...item, id: item.Mfr_ID })));
  }, [data]);

  const handlePageChange = (_: React.ChangeEvent<unknown>, newPage: number): void => {
    setPage(newPage - 1);
  };

  return {
    data: list,
    count: data?.Count,
    page,
    handlePageChange,
    loading,
  };
};
