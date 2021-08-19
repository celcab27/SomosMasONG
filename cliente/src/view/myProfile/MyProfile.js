import { React, useState, useEffect } from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';
import { Grid } from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import FaceIcon from '@material-ui/icons/Face';
import CardProfile from 'components/Profile/CardProfile';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import useStyles from './style';
import {makeGET} from 'services/httpRequest';
import {ENDPOINT_GETLOGGED, ENDPOINT_USER} from 'services/settings';
import EditUserForm from 'components/form/editUser/editUserForm';

function MyProfile() {
  const classes = useStyles();
  const history = useHistory();
  const { url } = useRouteMatch();
  const [usuario, setUsuario] = useState();
  const [edit, setEdit] = useState(false);
  const [userToEdit, setUserToEdit] = useState(false);

  const editUser = async (id) => {
    const response = await makeGET(`${ENDPOINT_USER}/${id}`);
    setUserToEdit(response);
    setEdit(true);
  };


  useEffect(() => {
    const fetchUsuario = async () => {
      const data = await makeGET(ENDPOINT_GETLOGGED);
      setUsuario(data);
    }
    fetchUsuario();
  }, []);

  const onClickHandler = (route) => {
    history.push(`${url}${route}`);
  };

  if(edit)  {
    return(
      <>
      <EditUserForm userInfo={userToEdit}></EditUserForm>
      <Button onClick={() => window.location.reload()} variant="contained" color="secondary">Volver</Button>
      </>
    )
  }
  return (
    <Grid className={classes.root} container>
      <Grid item xs={10} md={8} xl={4}>
        <CardProfile
          icono={<FaceIcon className={classes.iconos} />}
          titulo='Nombre'
          texto={usuario ? usuario.firstName : 'Cargando...'}
        />
      </Grid>
      <Grid item xs={10} md={8} xl={4}>
        <CardProfile
          icono={<AccountCircleIcon className={classes.iconos} />}
          titulo='Apellido'
          texto={usuario ? usuario.lastName : 'Cargando...'}
        />
      </Grid>
      <Grid item xs={10} md={8} xl={4}>
        <CardProfile
          icono={<MailIcon className={classes.iconos} />}
          titulo='Email'
          texto={usuario ? usuario.email : 'Cargando...'}
        />
      </Grid>
      <Grid container className={classes.root}>
        <Button
          color='primary'
          onClick={() => editUser(usuario.id)}
          className={classes.button}
          variant='contained'
          startIcon={<EditIcon className={classes.iconos} />}
        >
          {' '}
          Edit{' '}
        </Button>
        <Button
          onClick={() => onClickHandler('/perfil/eliminar')}
          color='secondary'
          className={classes.button}
          variant='contained'
          startIcon={<DeleteIcon className={classes.iconos} />}
        >
          {' '}
          Delete{' '}
        </Button>
      </Grid>
    </Grid>
  );
}

export default MyProfile;
