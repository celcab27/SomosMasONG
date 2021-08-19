import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts, removeContacts } from 'redux/contacts/actions/contacts';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Snackbar from '@material-ui/core/Snackbar';
import { ENDPOINT_CONTACTS } from 'services/settings';
import { makeDELETE, makeGET } from 'services/httpRequest';
import CloseIcon from '@material-ui/icons/Close';
import AlertDelete from 'components/utils/alertDelete/AlertDelete';
import ContentModal from 'components/utils/contentModal/ContentModal';
import { Container } from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import VisibilityIcon from '@material-ui/icons/Visibility';

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 400,
  },
  right: {
    textAlign: 'end',
  },
  center: {
    textAlign: 'center',
  },
}));

export default function ListOfContacts() {
  const dispatch = useDispatch();
  const contactsFromStore = useSelector((state) => state.contacts.contacts);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [contacts, setContacts] = useState([]);
  const [contentModalOpen, setContentModalOpen] = useState(false);
  const [visibleContact, setVisibleContact] = useState(null);
  const [openAlert, setOpenAlert] = useState(false);
  const [toastOpen, setToastOpen] = useState(false);
  const [pendingContact, setPendingContact] = useState(null);
  const classes = useStyles();

  useEffect(() => {
    async function getAllContacts() {
      const { contacts } = await makeGET(ENDPOINT_CONTACTS);
      dispatch(getContacts(contacts));
      setContacts(contacts);
    }
    !contactsFromStore ? getAllContacts() : setContacts(contactsFromStore);
  }, []);

  const handleContentModalOpen = (id) => {
    setVisibleContact(contacts.find((contact) => contact.id === id));
    setContentModalOpen(true);
  };

  const handleContentModalClose = () => {
    setContentModalOpen(false);
    setVisibleContact(null);
  };

  const handleOpenAlert = (id) => {
    setPendingContact(contacts.find((contact) => contact.id === id));
    setOpenAlert(true);
  };

  const handleDeleteCancel = () => {
    setPendingContact(null);
    setOpenAlert(false);
  };

  const handleDeleteConfirm = () => {
    makeDELETE(`${ENDPOINT_CONTACTS}/${pendingContact.id}`)
      .then(() => {
        setContacts(
          contacts.filter((contact) => contact.id !== pendingContact.id),
        );
        dispatch(removeContacts(pendingContact.id));
      })
      .catch((error) => {
        console.error('Error deleting contact: ', error);
      })
      .finally(() => {
        setPendingContact(null);
        setOpenAlert(false);
        setToastOpen(true);
      });
  };

  if (contacts) {
    return (
      <>
        <Container className={classes.table}>
          <h1 align='center'> Contactos</h1>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Nombre</TableCell>
                  <TableCell className={classes.center}>Email</TableCell>
                  <TableCell className={classes.right}>Acciones</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {contacts.map((contact) => {
                  return (
                    <TableRow key={contact.id}>
                      <TableCell>{contact.name}</TableCell>
                      <TableCell className={classes.center}>
                        {contact.email}
                      </TableCell>
                      {isMobile ? (
                        <TableCell className={classes.right}>
                          <IconButton
                            color='secondary'
                            aria-label='Edit'
                            onClick={() => handleContentModalOpen(contact.id)}
                          >
                            <VisibilityIcon />
                          </IconButton>
                          <IconButton
                            color='secondary'
                            aria-label='Eliminar'
                            onClick={() => handleOpenAlert(contact.id)}
                          >
                            <DeleteIcon />
                          </IconButton>
                        </TableCell>
                      ) : (
                        <TableCell className={classes.right}>
                          <Button
                            color='secondary'
                            onClick={() => handleContentModalOpen(contact.id)}
                          >
                            Ver mensaje
                          </Button>
                          <Button
                            color='secondary'
                            onClick={() => handleOpenAlert(contact.id)}
                          >
                            Eliminar
                          </Button>
                        </TableCell>
                      )}
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </Container>
        {contentModalOpen && (
          <ContentModal
            message={visibleContact.message}
            isOpen={contentModalOpen}
            onClose={handleContentModalClose}
          />
        )}
        {pendingContact && (
          <AlertDelete
            open={openAlert}
            message={`¿Eliminar el contacto de "${pendingContact.name}"?`}
            confirmar={handleDeleteConfirm}
            cancelar={handleDeleteCancel}
            onClose={() => setToastOpen(false)}
            snack={toastOpen}
            Message='Contacto eliminado'
            closeIcon={() => setToastOpen(false)}
            toastMessage='Se ha eliminado correctamente.'
          />
        )}
        <Snackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          open={toastOpen}
          autoHideDuration={2000}
          onClose={() => setToastOpen(false)}
          message='Contacto eliminado'
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
    return <h1>No hay contactos para mostrar.</h1>;
  }
}
