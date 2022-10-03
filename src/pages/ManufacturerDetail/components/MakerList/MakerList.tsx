import { FC, useContext, useState } from 'react';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SettingsIcon from '@mui/icons-material/Settings';
import { Box, Typography, Accordion, AccordionSummary, AccordionDetails, Skeleton } from '@mui/material';

import { ManufacturerDetailContext } from '../../contexts';
import { ModelList } from '../ModelList';

export const MakerList: FC = () => {
  const { makers, makersLoading, handleMakerChange } = useContext(ManufacturerDetailContext);

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

      {makersLoading && <Skeleton animation="wave" />}

      {!makersLoading &&
        makers?.map((maker) => (
          <Accordion key={maker.Make_ID} expanded={expanded === maker.Make_ID} onChange={handleChange(maker.Make_ID)}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <SettingsIcon />
              <Typography sx={{ marginLeft: 2 }}> {maker.Make_Name} </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <ModelList />
            </AccordionDetails>
          </Accordion>
        ))}
    </Box>
  );
};
