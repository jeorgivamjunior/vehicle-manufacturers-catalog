import { createContext, FC, PropsWithChildren, useState } from 'react';

import { ManufacturerProps } from '../../../../types';
import { useManufacturerRequest } from '../../hooks';

export const ManufacturerDetailContext = createContext<ReturnType<any>>({} as any);

export const ManufacturerDetailContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [manufacturer, setManufacturer] = useState<ManufacturerProps>();

  console.log('manufacturer', manufacturer);

  const response = useManufacturerRequest();

  const handleManufacturerChange = (manufacturer: ManufacturerProps): void => setManufacturer(manufacturer);

  return (
    <ManufacturerDetailContext.Provider value={{ handleManufacturerChange, manufacturer }}>
      {children}
    </ManufacturerDetailContext.Provider>
  );
};
