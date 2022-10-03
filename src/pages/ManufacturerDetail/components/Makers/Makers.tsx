import { FC, useContext, useState } from 'react';

import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SettingsIcon from '@mui/icons-material/Settings';
import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
} from '@mui/material';

import { ManufacturerDetailContext } from '../../contexts';

export const Makers: FC = () => {
  const { makers, models, handleMakerChange } = useContext(ManufacturerDetailContext);

  const [expanded, setExpanded] = useState<number | false>(false);

  const handleChange = (makerId: number) => (_: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? makerId : false);
    handleMakerChange(makerId);
  };

  return (
    <Box marginTop={5}>
      <Typography gutterBottom variant="h5" component="div">
        Makers
      </Typography>

      {makers?.map((maker) => (
        <Accordion key={maker.Make_ID} expanded={expanded === maker.Make_ID} onChange={handleChange(maker.Make_ID)}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <SettingsIcon />
            <Typography sx={{ marginLeft: 2 }}> {maker.Make_Name} </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <List dense>
              {models?.map((model) => (
                <ListItem key={model.Model_ID}>
                  <ListItemIcon>
                    <DirectionsCarIcon />
                  </ListItemIcon>
                  <ListItemText primary={model.Model_Name} />
                </ListItem>
              ))}
            </List>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
};
