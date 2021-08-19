import React from 'react';
import { useHistory } from 'react-router-dom';
import { Typography, Button, Grid } from '@material-ui/core';
import useStyles from './style';
import LogoImage from 'images/assets/logosomos.png';

const RedirectView = () => {
  const history = useHistory();
  const classes = useStyles();
  return (
    <Grid
      container
      justify='center'
      align='center'
      alignItems='center'
      className={classes.container}
    >
      <Grid
        container
        direction='column'
        justify='space-around'
        alignItems='center'
        className={classes.alertContainer}
      >
        <img src={LogoImage} alt='Logo de la ong' className={classes.logo} />
        <Typography
          variant='h2'
          component='h2'
          color='initial'
          className={classes.text}
        >
          Debe iniciar sesión para entrar al backoffice
        </Typography>
        <Button
          className={classes.button}
          onClick={() => history.replace('/')}
          variant='contained'
          color='primary'
          size='large'
        >
          Volver
        </Button>
      </Grid>
    </Grid>
  );
};

export default RedirectView;
