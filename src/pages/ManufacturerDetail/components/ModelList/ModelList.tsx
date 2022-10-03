import { FC, useContext } from 'react';

import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import { List, ListItem, ListItemText, ListItemIcon, Skeleton } from '@mui/material';

import { ManufacturerDetailContext } from '../../contexts';

export const ModelList: FC = () => {
  const { models, modelsLoading } = useContext(ManufacturerDetailContext);

  return (
    <>
      {modelsLoading && <Skeleton animation="wave" />}

      <List dense>
        {!modelsLoading &&
          models?.map((model) => (
            <ListItem key={model.Model_ID}>
              <ListItemIcon>
                <DirectionsCarIcon />
              </ListItemIcon>
              <ListItemText primary={model.Model_Name} />
            </ListItem>
          ))}
      </List>
    </>
  );
};
