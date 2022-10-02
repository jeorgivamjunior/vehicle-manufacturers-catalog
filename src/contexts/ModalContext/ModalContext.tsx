import React, { createContext, FC, forwardRef, PropsWithChildren, useState } from 'react';

import { ModalContextProps } from './types';

export const ModalContext = createContext<ModalContextProps>({} as ModalContextProps);

export const ModalContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [component, setComponent] = useState<React.ReactNode>(null);

  const toggleOpen = (): void => setOpen(!open);

  const configureComponent = (component: React.ReactNode): void => setComponent(component);

  return (
    <></>
    // <ModalContext.Provider value={{ toggleOpen, configureComponent }}>
    //   <Dialog
    //     TransitionComponent={Transition}
    //     fullWidth
    //     maxWidth="sm"
    //     fullScreen={fullScreen}
    //     open={open}
    //     onClose={toggleOpen}
    //   >
    //     {component}
    //   </Dialog>
    //   {children}
    // </ModalContext.Provider>
  );
};
