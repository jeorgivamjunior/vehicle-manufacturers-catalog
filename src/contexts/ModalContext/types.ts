export interface ModalContextProps {
  toggleOpen: () => void;
  configureComponent: (component: React.ReactNode) => void;
}
