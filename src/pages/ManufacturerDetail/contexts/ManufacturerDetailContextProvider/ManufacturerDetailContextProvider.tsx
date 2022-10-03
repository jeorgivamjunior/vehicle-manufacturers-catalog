import { createContext, FC, PropsWithChildren, useState } from 'react';

import { ManufacturerProps } from '../../../../types';
import { useMakerRequest, useModelRequest } from '../../hooks';
import { ManufacturerDetailContextProviderProps } from './types';

export const ManufacturerDetailContext = createContext<ManufacturerDetailContextProviderProps>({} as any);

export const ManufacturerDetailContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [manufacturer, setManufacturer] = useState<ManufacturerProps>();
  const [makerId, setMakerId] = useState<number>();

  const { data: makers, loading: makersLoading } = useMakerRequest(manufacturer?.Mfr_ID);
  const { data: models, loading: modelsLoading } = useModelRequest(makerId);

  const handleManufacturerChange = (manufacturer: ManufacturerProps): void => setManufacturer(manufacturer);
  const handleMakerChange = (makerId: number): void => setMakerId(makerId);

  return (
    <ManufacturerDetailContext.Provider
      value={{
        handleManufacturerChange,
        manufacturer,
        makers,
        makersLoading,
        handleMakerChange,
        models,
        modelsLoading,
      }}
    >
      {children}
    </ManufacturerDetailContext.Provider>
  );
};
