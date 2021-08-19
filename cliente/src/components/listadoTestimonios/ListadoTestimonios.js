import { useEffect, useState } from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getTestimonials, removeTestimonial } from 'redux/testimonials/actions/testimonials';
import { makeGET } from 'services/httpRequest.js';
import { ENDPOINT_GETTESTIMONIALS } from 'services/settings';
import {
  Box,
  Button,
  Container,
  IconButton,
  Paper,
  Snackbar,
  TableContainer,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  makeStyles
} from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import CloseIcon from '@material-ui/icons/Close';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import VisibilityIcon from '@material-ui/icons/Visibility';

import AlertDelete from 'components/utils/alertDelete/AlertDelete';
import ContentModal from 'components/utils/contentModal/ContentModal';

import { makeDELETE } from 'services/httpRequest.js';
 

const useStyles = makeStyles((theme) => {
  return {
    button: {
      margin: theme.spacing(1),
    },
    right: {
      textAlign: 'end',
    },
  };
});

const ListadoTestimonios = () => {
  const dispatch = useDispatch();
  const testimonialsFromStore = useSelector(state => state.testimonials.testimonials)
  const history = useHistory();
  const { url } = useRouteMatch();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const classes = useStyles();
  const [testimonials, setTestimonials] = useState([]);
  const [contentModalOpen, setContentModalOpen] = useState(false);
  const [visibleTestimonial, setVisibleTestimonial] = useState(null);
  const [openAlert, setOpenAlert] = useState(false);
  const [toastOpen, setToastOpen] = useState(false);
  const [pendingTestimony, setPendingTestimony] = useState(null);


  useEffect(() => {
    async function getAllTestimonials() {
      const { Testimonials: testimonialsAPI } = await makeGET(ENDPOINT_GETTESTIMONIALS);
      dispatch(getTestimonials(testimonialsAPI));
      setTestimonials(testimonialsAPI);
    }
    !testimonialsFromStore ? getAllTestimonials() : setTestimonials(testimonialsFromStore);
  }, []);

  const handleContentModalOpen = (testimonialID) => {
    setVisibleTestimonial(testimonials.find((testimonial) => testimonial.id === testimonialID));
    setContentModalOpen(true);
  }

  const handleContentModalClose = () => {
    setContentModalOpen(false);
    setVisibleTestimonial(null);
  }

  const handleOpenAlert = (testimonialID) => {
    setPendingTestimony(
      testimonials.find((testimonial) => testimonial.id === testimonialID),
    );
    setOpenAlert(true);
  };

  const handleDeleteCancel = () => {
    setPendingTestimony(null);
    setOpenAlert(false);
  };

  const handleDeleteConfirm = () => {
    makeDELETE(`${ENDPOINT_GETTESTIMONIALS}/${pendingTestimony.id}`)
    .then(() => {
      setTestimonials(
        testimonials.filter((testimony) => testimony.id !== pendingTestimony.id),
      );
      dispatch(removeTestimonial(pendingTestimony.id));
    })
    .catch((error) => {
      console.error('Error deleting testimony: ', error);
    })
    .finally(() => {
      setPendingTestimony(null);
      setOpenAlert(false);
      setToastOpen(true);
    });

  };

  if (testimonials) {
    return (
      <>
        <Container>
          <div style={{ width: '100%' }}>
            <Box display='flex'>
              <Box width='100%'>
                {' '}
                <Typography variant='h4' component='h1' gutterBottom>
                  {' '}
                  Testimonios{' '}
                </Typography>{' '}
              </Box>
              <Box>
                {' '}
                <Button
                  onClick={() => history.push(`${url}/create`)}
                  variant='contained'
                  color='primary'
                >
                  Crear
                </Button>{' '}
              </Box>
            </Box>
          </div>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Nombre</TableCell>
                  <TableCell className={classes.right}>Acciones</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {testimonials.map((testimonial) => {
                  return (
                    <TableRow key={testimonial.id}>
                      <TableCell>
                        {testimonial.name}
                      </TableCell>
                      {isMobile ?
                        <TableCell className={classes.right}>
                          <IconButton
                            color='primary'
                            aria-label='Ver'   
                            onClick={() => handleContentModalOpen(testimonial.id)}
                          >
                            <VisibilityIcon className={classes.icon} />
                          </IconButton>
                          <IconButton
                            color='primary'
                            aria-label='Editar'
                            onClick={() => history.push(`/backoffice/testimonials/${testimonial.id}/edit`)}
                          >
                            <EditIcon className={classes.icon} />
                          </IconButton>
                          <IconButton
                            color='secondary'
                            aria-label='Eliminar'
                            onClick={() => handleOpenAlert(testimonial.id)}

                          >
                            <DeleteIcon className={classes.icon} />
                          </IconButton>
                        </TableCell> :
                        <TableCell className={classes.right}>
                          <Button
                            variant='contained'
                            color='primary'
                            className={classes.button}
                            startIcon={<VisibilityIcon className={classes.icon} />}
                            onClick={() => handleContentModalOpen(testimonial.id)}
                          >
                            Ver
                          </Button>
                          <Button
                            variant='contained'
                            color='primary'
                            className={classes.button}
                            startIcon={<EditIcon className={classes.icon} />}
                            onClick={() => history.push(`/backoffice/testimonials/${testimonial.id}/edit`)}
                          >
                            Editar
                          </Button>
                          <Button
                            variant='contained'
                            color='secondary'
                            className={classes.button}
                            startIcon={<DeleteIcon className={classes.icon} />}
                            onClick={() => handleOpenAlert(testimonial.id)}
                          >
                            Eliminar
                          </Button>
                        </TableCell>
                        }
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </Container>
        {contentModalOpen &&
          <ContentModal
            message={visibleTestimonial.content}
            isOpen={contentModalOpen}
            onClose={handleContentModalClose}
          />
        }
        {pendingTestimony && (
          <AlertDelete
            open={openAlert}
            message={`¿Eliminar testimonio "${pendingTestimony.name}"?`}
            confirmar={handleDeleteConfirm}
            cancelar={handleDeleteCancel}
            onClose={() => setToastOpen(false)}
            snack={toastOpen}
            Message='Testimonio eliminado'
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
          message='Testimonio eliminado'
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
    return <h1>No hay testimonios para mostrar.</h1>;
  }
};

export default ListadoTestimonios;
