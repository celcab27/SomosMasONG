import { useState } from 'react';
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  IconButton,
} from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';
import useStyles from './style';
import { useSelector } from 'react-redux';
import { logout } from 'services/auth';
import LogoImage from '../../../src/images/assets/logosomos.png';
const DrawerComponent = () => {
  const { user } = useSelector((state) => state.user);
  const history = useHistory();
  const [openDrawer, setOpenDrawer] = useState(false);
  const classes = useStyles();
  return (
    <>
      <Link to='/'>
        <img src={LogoImage} className={classes.logo} alt='ONG'></img>
      </Link>
      <Drawer
        anchor='left'
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        {' '}
        <List>
          <ListItem divider button onClick={() => setOpenDrawer(false)}>
            <ListItemIcon>
              <ListItemText>
                <Link to='/nosotros' style={{ textDecoration: 'none' }}>
                  Nosotros
                </Link>
              </ListItemText>
            </ListItemIcon>
          </ListItem>
          <ListItem divider button onClick={() => setOpenDrawer(false)}>
            <ListItemIcon>
              <ListItemText>
                <Link to='/contacto' style={{ textDecoration: 'none' }}>
                  Contacto
                </Link>
              </ListItemText>
            </ListItemIcon>
          </ListItem>
          <ListItem divider button onClick={() => setOpenDrawer(false)}>
            <ListItemIcon>
              <ListItemText>
                <Link to='/novedades' style={{ textDecoration: 'none' }}>
                  Novedades
                </Link>
              </ListItemText>
            </ListItemIcon>
          </ListItem>
          <ListItem divider button onClick={() => setOpenDrawer(false)}>
            <ListItemIcon>
              <ListItemText>
                <Link to='/actividades' style={{ textDecoration: 'none' }}>
                  Actividades
                </Link>
              </ListItemText>
            </ListItemIcon>
          </ListItem>
          <ListItem divider button onClick={() => setOpenDrawer(false)}>
            <ListItemIcon>
              <ListItemText>
                <Link to='/testimonios' style={{ textDecoration: 'none' }}>
                  Testimonios
                </Link>
              </ListItemText>
            </ListItemIcon>
          </ListItem>
          {user?.id ? (
            <List>
              <ListItem divider button onClick={() => setOpenDrawer(false)}>
                <ListItemIcon>
                  <ListItemText>
                    <Link to='/backoffice' style={{ textDecoration: 'none' }}>
                      Backoffice
                    </Link>
                  </ListItemText>
                </ListItemIcon>
              </ListItem>
              <ListItem divider button onClick={() => setOpenDrawer(false)}>
                <ListItemIcon>
                  <ListItemText>
                    <Link to='/perfil' style={{ textDecoration: 'none' }}>
                      Perfil
                    </Link>
                  </ListItemText>
                </ListItemIcon>
              </ListItem>
              <ListItem
                divider
                button
                onClick={() => {
                  logout();
                  setOpenDrawer(false);
                  history.push('/');
                }}
              >
                <ListItemIcon>
                  <ListItemText>
                    <Link style={{ textDecoration: 'none' }}>Log out</Link>
                  </ListItemText>
                </ListItemIcon>
              </ListItem>
            </List>
          ) : (
            <List>
              <ListItem divider button onClick={() => setOpenDrawer(false)}>
                <ListItemIcon>
                  <ListItemText>
                    <Link to='/registrar' style={{ textDecoration: 'none' }}>
                      Registrarse
                    </Link>
                  </ListItemText>
                </ListItemIcon>
              </ListItem>
              <ListItem divider button onClick={() => setOpenDrawer(false)}>
                <ListItemIcon>
                  <ListItemText>
                    <Link to='/ingresar' style={{ textDecoration: 'none' }}>
                      Iniciar Sesión
                    </Link>
                  </ListItemText>
                </ListItemIcon>
              </ListItem>
            </List>
          )}
        </List>
      </Drawer>
      <IconButton
        className={classes.iconButtonContainer}
        onClick={() => setOpenDrawer(!openDrawer)}
        disableRipple
      >
        <MenuIcon className={classes.menuIconToggle} />
      </IconButton>
    </>
  );
};

export default DrawerComponent;
