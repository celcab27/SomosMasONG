import { Grid, Typography } from '@material-ui/core';
import React from 'react';
import useStyles from './style';
import Image404 from 'images/404.png';

const NotFound = () => {
  const classes = useStyles();
  return (
    <Grid
      container
      align='center'
      justify='center'
      className={classes.container}
    >
      <Grid item xs='12'>
        <img src={Image404} alt='404' className={classes.image} />
      </Grid>
      <Grid item xs='12'>
        <Typography variant='h4'>
          Lo sentimos, no pudimos encontrar esta pagina
        </Typography>
      </Grid>
    </Grid>
  );
};

export default NotFound;
