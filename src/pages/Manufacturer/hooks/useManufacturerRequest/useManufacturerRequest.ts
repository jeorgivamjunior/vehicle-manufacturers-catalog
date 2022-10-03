import { useEffect, useState } from 'react';

import useAxios from 'axios-hooks';

import { ManufacturerResponse, useManufacturerRequestProps } from './types';

export const useManufacturerRequest = (): useManufacturerRequestProps => {
  const [page, setPage] = useState(0);
  const [list, setList] = useState<ManufacturerResponse[]>([]);
  const [{ data, loading }] = useAxios(`/vehicles/GetAllManufacturers?format=json&page=${page + 1}`);

  useEffect(() => {
    if (!data) return;

    setList(data.Results.map((item: ManufacturerResponse) => ({ ...item, id: item.Mfr_ID })));
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
