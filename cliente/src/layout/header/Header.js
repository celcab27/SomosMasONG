import { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Tabs,
  Tab,
  useMediaQuery,
  useTheme,
  Button,
  Grid,
  IconButton,
} from '@material-ui/core';
import PersonIcon from '@material-ui/icons/Person';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import LogoImage from '../../../src/images/assets/logosomos.png';
import DrawerComponent from './drawer';
import useStyles from './style';
import { Link, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { logout } from 'services/auth';

const NavBar = () => {
  const { user } = useSelector((state) => state.user);
  const history = useHistory();
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const handleClick = (e, newValue) => {
    setValue(newValue);
  };
  const theme = useTheme(); //Get a copy of our default theme in our component so that we can access the breakpoints and pass the useMediaQuery
  const isMatch = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <AppBar color='primary' className={classes.offset}>
      <Toolbar className={classes.spaced}>
        {isMatch ? (
          <DrawerComponent className={classes.drawer} />
        ) : (
          <>
            <Grid container className={classes.align}>
              <Link to='/'>
                <img src={LogoImage} className={classes.logo} alt='ONG'></img>
              </Link>
              <Grid item className={classes.align}>
                <Tabs
                  onChange={handleClick}
                  indicatorColor='secondary'
                  value={value}
                >
                  <Tab
                    className={classes.noMinWidth}
                    disableRipple
                    label='nosotros'
                    to='/nosotros'
                    component={Link}
                  />
                  <Tab
                    className={classes.noMinWidth}
                    disableRipple
                    label='contacto'
                    to='/contacto'
                    component={Link}
                  />
                  <Tab
                    className={classes.noMinWidth}
                    disableRipple
                    label='novedades'
                    to='/novedades'
                    component={Link}
                  />
                  <Tab
                    className={classes.noMinWidth}
                    disableRipple
                    label='actividades'
                    to='/actividades'
                    component={Link}
                  />
                  <Tab
                    className={classes.noMinWidth}
                    disableRipple
                    label='testimonios'
                    to='/testimonios'
                    component={Link}
                  />
                </Tabs>
              </Grid>
              {user?.id ? (
                <Grid item className={classes.align}>
                  {user?.roleId === 1 ? (
                    <Button
                      onClick={() => history.push('/backoffice')}
                      variant='contained'
                      color='secondary'
                      className={`${classes.split} ${classes.backofficeButton}`}
                    >
                      Backoffice
                    </Button>
                  ) : (
                    <IconButton
                      onClick={() => history.push('/backoffice')}
                      variant='contained'
                      color='secondary'
                      className={classes.split}
                    >
                      <PersonIcon />
                    </IconButton>
                  )}
                  {/* Log out en desarrollo */}
                  <IconButton
                    onClick={() => {
                      logout();
                      history.push('/');
                    }}
                    variant='contained'
                    color='secondary'
                    className={`${classes.split} ${classes.logoutButton}`}
                  >
                    <PowerSettingsNewIcon />
                  </IconButton>
                </Grid>
              ) : (
                <Grid item className={classes.align}>
                  <Button
                    onClick={() => history.push('/registrar')}
                    variant='contained'
                    color='secondary'
                    className={classes.split}
                  >
                    Registrarse
                  </Button>

                  <Button
                    onClick={() => history.push('/ingresar')}
                    variant='contained'
                    color='secondary'
                    className={classes.split}
                  >
                    Iniciar sesión
                  </Button>
                </Grid>
              )}
            </Grid>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
