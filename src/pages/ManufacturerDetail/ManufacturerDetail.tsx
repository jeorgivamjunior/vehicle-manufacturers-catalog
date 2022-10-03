import { FC, useContext, useEffect, useState } from 'react';

import CloseIcon from '@mui/icons-material/Close';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import VisibilityRoundedIcon from '@mui/icons-material/VisibilityRounded';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  DialogContent,
  DialogTitle,
  IconButton,
  Typography,
} from '@mui/material';

import { useModal } from '../../hooks';
import { ManufacturerProps } from '../../types';
import { Detail } from './components';
import { ManufacturerDetailContext, ManufacturerDetailContextProvider } from './contexts';

export const ManufacturerDetail: FC<{ manufacturer: ManufacturerProps }> = ({ manufacturer }) => {
  const { handleManufacturerChange } = useContext(ManufacturerDetailContext);
  const { closeModal } = useModal();
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

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

        <Box marginTop={5}>
          <Typography gutterBottom variant="h5" component="div">
            Makers
          </Typography>

          <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1bh-content" id="panel1bh-header">
              <Typography> General settings</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>Model 1</Typography>
              <Typography>Model 1</Typography>
              <Typography>Model 1</Typography>
              <Typography>Model 1</Typography>
              <Typography>Model 1</Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2bh-content" id="panel2bh-header">
              <Typography sx={{ width: '33%', flexShrink: 0 }}>Users</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>Model 1</Typography>
              <Typography>Model 1</Typography>
              <Typography>Model 1</Typography>
              <Typography>Model 1</Typography>
              <Typography>Model 1</Typography>
            </AccordionDetails>
          </Accordion>
        </Box>
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
