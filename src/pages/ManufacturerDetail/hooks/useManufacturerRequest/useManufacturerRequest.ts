import { useEffect, useState } from 'react';

import useAxios from 'axios-hooks';

import { ManufacturerResponse, useManufacturerRequestProps } from './types';

export const useManufacturerRequest = (): useManufacturerRequestProps => {
  const [list, setList] = useState<ManufacturerResponse[]>([]);
  const [{ data, loading }] = useAxios(`/vehicles/GetMakeForManufacturer/957?format=json`);

  useEffect(() => {
    if (!data) return;

    setList(data.Results);
  }, [data]);

  return {
    data: list,
    loading,
  };
};
