import { FC, useContext } from 'react';

import { Card, CardContent, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2/Grid2';

import { ManufacturerDetailContext } from '../../contexts';

export const Detail: FC = () => {
  const { manufacturer } = useContext(ManufacturerDetailContext);

  return (
    <Card>
      <CardContent>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid xs={6}>
            <Typography gutterBottom variant="h6" component="div">
              Common Name
            </Typography>
            <Typography variant="body1" color="text.secondary">
              {manufacturer?.Mfr_CommonName}
            </Typography>
          </Grid>
          <Grid xs={6}>
            <Typography gutterBottom variant="h6" component="div">
              Country
            </Typography>
            <Typography variant="body1" color="text.secondary">
              {manufacturer?.Country}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};
