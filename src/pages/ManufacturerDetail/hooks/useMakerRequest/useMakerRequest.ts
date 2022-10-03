import { useEffect } from 'react';

import useAxios from 'axios-hooks';

import { useMakerRequestProps } from './types';

export const useMakerRequest = (id?: number): useMakerRequestProps => {
  const [{ data, loading }, request] = useAxios(`/vehicles/GetMakeForManufacturer/${id as number}?format=json`, {
    manual: true,
  });

  useEffect(() => {
    if (!id) return;

    void request();
  }, [id]);

  return {
    data: data?.Results,
    loading,
  };
};
