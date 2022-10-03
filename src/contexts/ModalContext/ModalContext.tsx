import React, { createContext, FC, forwardRef, PropsWithChildren, useState } from 'react';

import { Dialog, Slide, useMediaQuery, useTheme } from '@mui/material';
import { TransitionProps } from '@mui/material/transitions';

import { ModalContextProps } from './types';

export const ModalContext = createContext<ModalContextProps>({} as ModalContextProps);

export const ModalContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
  const [open, setOpen] = useState(false);
  const [component, setComponent] = useState<React.ReactNode>(null);

  const toggleOpen = (): void => setOpen(!open);

  const configureComponent = (component: React.ReactNode): void => setComponent(component);

  return (
    <ModalContext.Provider value={{ toggleOpen, configureComponent }}>
      <Dialog
        TransitionComponent={Transition}
        fullWidth
        maxWidth="sm"
        fullScreen={fullScreen}
        open={open}
        onClose={toggleOpen}
      >
        {component}
      </Dialog>
      {children}
    </ModalContext.Provider>
  );
};

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});
