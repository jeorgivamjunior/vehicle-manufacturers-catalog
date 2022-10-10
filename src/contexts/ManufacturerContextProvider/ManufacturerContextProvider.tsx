import { createContext, FC, PropsWithChildren, useState } from 'react';

import { useManufacturerRequest } from '../../hooks';
import { ManufacturerProps } from '../../types';

interface ManufacturerContextProps extends ReturnType<typeof useManufacturerRequest> {
  selectedManufacturer?: ManufacturerProps;
  handleManufacturerChange: (manufacturer: ManufacturerProps) => void;
}

export const ManufacturerContext = createContext<ManufacturerContextProps>({} as any);

export const ManufacturerContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [selectedManufacturer, setSelectedManufacturer] = useState<ManufacturerProps>();
  const response = useManufacturerRequest();

  const handleManufacturerChange = (manufacturer: ManufacturerProps): void => setSelectedManufacturer(manufacturer);

  return (
    <ManufacturerContext.Provider value={{ ...response, selectedManufacturer, handleManufacturerChange }}>
      {children}
    </ManufacturerContext.Provider>
  );
};
