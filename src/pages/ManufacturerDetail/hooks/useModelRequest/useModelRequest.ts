import { useEffect } from 'react';

import useAxios from 'axios-hooks';

import { useModelRequestProps } from './types';

export const useModelRequest = (id?: number): useModelRequestProps => {
  const [{ data, loading }, request] = useAxios(`/vehicles/GetModelsForMakeId/${id as number}?format=json`, {
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
