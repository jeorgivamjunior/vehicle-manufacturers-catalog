import React, { FC } from 'react';

import CloseIcon from '@mui/icons-material/Close';
import VisibilityRoundedIcon from '@mui/icons-material/VisibilityRounded';
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  DialogContent,
  DialogTitle,
  IconButton,
  Typography,
} from '@mui/material';

import { useModal } from '../../hooks';

export const ManufacturerDetail: any = () => {
  const { closeModal } = useModal();

  return (
    <>
      <DialogTitle>
        Manufacturer Detail
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
        <Card>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              common name
            </Typography>
            <Typography variant="body2" color="text.secondary">
              country
            </Typography>
          </CardContent>
        </Card>
      </DialogContent>
    </>
  );
};

export const ManufacturerDetailModalButton: FC = () => {
  const { setComponent, openModal } = useModal();

  const handleButtonClick = (): void => {
    console.log('handleButtonClick');
    setComponent(<ManufacturerDetail />);
    openModal();
  };

  return (
    <IconButton color="success" onClick={handleButtonClick}>
      <VisibilityRoundedIcon />
    </IconButton>
  );
};

ManufacturerDetail.ManufacturerDetailModalButton = ManufacturerDetailModalButton;
