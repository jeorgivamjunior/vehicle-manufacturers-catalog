import React, { useContext } from 'react';

import { ModalContext } from '../../contexts';
interface useModalProps {
  content?: React.JSXElementConstructor<any>;
}
interface useModalReturn {
  openModal: () => void;
  closeModal: () => void;
}

export const useModal = ({ content }: useModalProps = {}): useModalReturn => {
  const { configureComponent, toggleOpen } = useContext(ModalContext);

  if (content) configureComponent(content);

  return {
    openModal: toggleOpen,
    closeModal: toggleOpen,
  };
};
