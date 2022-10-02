import React, { useContext } from 'react';

import { ModalContext } from '../../contexts';

interface useModalProps {
  openModal: () => void;
  closeModal: () => void;
  setComponent: (component: React.ReactNode) => void;
}

export const useModal = (): useModalProps => {
  const { configureComponent, toggleOpen } = useContext(ModalContext);

  const setComponent = (component: React.ReactNode): void => {
    configureComponent(component);
  };
  return {
    openModal: toggleOpen,
    closeModal: toggleOpen,
    setComponent,
  };
};
