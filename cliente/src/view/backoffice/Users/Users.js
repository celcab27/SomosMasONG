import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers, removeUser } from 'redux/users/actions/users'
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import Snackbar from '@material-ui/core/Snackbar';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import KeyboardReturnIcon from '@material-ui/icons/KeyboardReturn';
import { ButtonGroup, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { ENDPOINT_USER } from 'services/settings';
import { makeDELETE, makeGET } from 'services/httpRequest';
import EditUserForm from 'components/form/editUser/editUserForm';



const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },

});

/**
 * User list view (backoffice)
 * @example
 * import Users from 'view/backoffice/users'
 * <Users />
 * @returns {import('react').ReactNode} the users view
 */
const Users = () => {
  const dispatch = useDispatch();
  const usersFromStorage = useSelector(state => state.users.users);
  const classes = useStyles();
  const [users, setUsers] = useState([]);
  const [pendingUser, setPendingUser] = useState(null);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [toastOpen, setToastOpen] = useState(false);
  const [edit, setEdit] = useState(false);
  const [userToEdit, setUserToEdit] = useState(false);

  useEffect(() => {
    async function getUser() {
      const { users: allUsers } = await makeGET(ENDPOINT_USER);
      dispatch(getUsers(allUsers));
      setUsers(allUsers);
    }
    !usersFromStorage ? getUser() : setUsers(usersFromStorage);
  }, []);

  const editUser = async (id) => {
    const response = await makeGET(`${ENDPOINT_USER}/${id}`);
    setUserToEdit(response);
    setEdit(true);
  };

  const handleDeleteAction = (userId) => {
    setPendingUser(users.find((user) => user.id === userId));
    setDeleteDialogOpen(true);
  };

  const handleDeleteCancel = () => {
    setDeleteDialogOpen(false);
    setPendingUser(null);
  };

  const handleDeleteConfirm = () => {
    makeDELETE(`${ENDPOINT_USER}/${pendingUser.id}`)
      .then(() => {
        setUsers(users.filter((user) => user.id !== pendingUser.id));
        dispatch(removeUser(pendingUser.id));
      })
      .catch((err) => {
        console.error('Error deleting user: ', err);
      })
      .finally(() => {
        setDeleteDialogOpen(false);
        setPendingUser(null);
        setToastOpen(true);
      });
  };

  if(edit)  {
    return(
      <>
      <EditUserForm userInfo={userToEdit}></EditUserForm>
      <Button onClick={() => window.location.reload()} variant="contained" color="secondary">Volver</Button>
      </>
    )
  }
  if (users) {
    return (
      <>
        <Container px={4} py={4}>
          <Typography variant='h4' component='h1' gutterBottom>
            Usuarios
          </Typography>
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label='simple table'>
              <TableHead>
                <TableRow>
                  <TableCell>Nombre</TableCell>
                  <TableCell>Apellido</TableCell>
                  <TableCell>Correo electrónico</TableCell>
                  <TableCell>Tipo</TableCell>
                  <TableCell align='right'>Acciones</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {users.map((user) => (
                  <TableRow key={user.id}>
                    <TableCell>{user.firstName}</TableCell>
                    <TableCell>{user.lastName}</TableCell>
                    <TableCell>{user.email}</TableCell>
                    <TableCell>
                      {user.roleId === 1 ? 'Administrador' : 'Usuario'}
                    </TableCell>
                    <TableCell align='right'>
                      <Button
                        color='primary'
                        onClick={() => editUser(user.id)}
                      >
                        Editar
                      </Button>
                      <Button
                        color='secondary'
                        onClick={() => handleDeleteAction(user.id)}
                      >
                        Eliminar
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Container>
        {pendingUser && (
          <Dialog
            open={deleteDialogOpen}
            onClose={handleDeleteCancel}
            aria-labelledby='alert-dialog-title'
            aria-describedby='alert-dialog-description'
          >
            <DialogContent>
              <DialogContentText id='alert-dialog-description'>
                ¿Desea eliminar el usuario {pendingUser.firstName}{' '}
                {pendingUser.lastName}?
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleDeleteCancel} color='primary'>
                Cancelar
              </Button>
              <Button onClick={handleDeleteConfirm} color='primary' autoFocus>
                Confirmar
              </Button>
            </DialogActions>
          </Dialog>
        )}
        <Snackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          open={toastOpen}
          autoHideDuration={5000}
          onClose={() => setToastOpen(false)}
          message='Usuario eliminado'
          action={
            <IconButton
              size='small'
              aria-label='close'
              color='inherit'
              onClick={() => setToastOpen(false)}
            >
              <CloseIcon fontSize='small' />
            </IconButton>
          }
        />
      </>
    );
  } else {
    return <h1>No hay usuarios para mostrar.</h1>;
  }
};

export default Users;
