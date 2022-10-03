import { FC, useContext, useEffect } from 'react';

import CloseIcon from '@mui/icons-material/Close';
import VisibilityRoundedIcon from '@mui/icons-material/VisibilityRounded';
import { DialogContent, DialogTitle, IconButton, Typography } from '@mui/material';

import { useModal } from '../../hooks';
import { ManufacturerProps } from '../../types';
import { Detail, Makers } from './components';
import { ManufacturerDetailContext, ManufacturerDetailContextProvider } from './contexts';

export const ManufacturerDetail: FC<{ manufacturer: ManufacturerProps }> = ({ manufacturer }) => {
  const { handleManufacturerChange } = useContext(ManufacturerDetailContext);
  const { closeModal } = useModal();

  useEffect(() => {
    handleManufacturerChange(manufacturer);
  }, [manufacturer]);

  return (
    <>
      <DialogTitle component="div">
        <Typography variant="h5"> Manufacturer Detail</Typography>
        <IconButton
          onClick={closeModal}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        <Detail />
        <Makers />
      </DialogContent>
    </>
  );
};

export const ManufacturerDetailModalButton: FC<{ manufacturer: ManufacturerProps }> = ({ manufacturer }) => {
  const { setComponent, openModal } = useModal();

  const handleButtonClick = (): void => {
    setComponent(
      <ManufacturerDetailContextProvider>
        <ManufacturerDetail manufacturer={manufacturer} />
      </ManufacturerDetailContextProvider>,
    );
    openModal();
  };

  return (
    <IconButton color="success" onClick={handleButtonClick}>
      <VisibilityRoundedIcon />
    </IconButton>
  );
};
