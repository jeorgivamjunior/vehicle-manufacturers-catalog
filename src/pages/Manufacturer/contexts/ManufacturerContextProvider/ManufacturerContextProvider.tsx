import { createContext, FC, PropsWithChildren } from 'react';

import { useManufacturerRequest } from '../../hooks';

export const ManufacturerContext = createContext<ReturnType<typeof useManufacturerRequest>>({} as any);

export const ManufacturerContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const response = useManufacturerRequest();

  return <ManufacturerContext.Provider value={{ ...response }}>{children}</ManufacturerContext.Provider>;
};
