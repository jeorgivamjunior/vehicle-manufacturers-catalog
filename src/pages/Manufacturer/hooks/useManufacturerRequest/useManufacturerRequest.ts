import { useEffect, useState } from 'react';

import useAxios from 'axios-hooks';

import { ManufacturerResponse, useManufacturerRequestProps } from './types';

export const useManufacturerRequest = (): useManufacturerRequestProps => {
  const [data, setData] = useState<ManufacturerResponse[]>([]);
  const [{ data: response, loading }] = useAxios('/vehicles/GetAllManufacturers?format=json');

  useEffect(() => {
    if (!response) return;

    setData(response.Results.map((item: ManufacturerResponse) => ({ ...item, id: item.Mfr_ID })));
  }, [response]);

  return {
    data,
    loading,
  };
};
