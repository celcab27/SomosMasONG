import React, { useEffect, useState } from 'react';
import { makeGET, makeDELETE } from 'services/httpRequest';
import { ENDPOINT_ACTIVITIES } from 'services/settings';
import { useHistory, useRouteMatch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getActivities, removeActivity } from 'redux/activities/actions/activities';
import {
  Button,
  Typography,
  Box,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Dialog,
  DialogTitle,
  DialogActions,
  Container,
} from '@material-ui/core';
import EditActivityForm from 'components/form/editActivity/editActivityForm';
import useStyles from './style';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

/**
 * Activities view in backoffice
 * @example
 * import Activities from 'view/backoffice/activities/Activities'
 * <Activities />
 */
const Activities = () => {
  const dispatch = useDispatch();
  const activitiesFromStore = useSelector(state => state.activities.activities);
  const { url } = useRouteMatch();
  const history = useHistory();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [open, setOpen] = useState(false);
  const [edit, setEdit] = useState(false);
  const [activities, setActivities] = useState([]);
  const [activityToDelete, setActivityToDelete] = useState('');
  const [activityToEdit, setActivityToEdit] = useState('');

  const classes = useStyles();
  useEffect(() => {
    !activitiesFromStore ? getAllActivities() : setActivities(activitiesFromStore);
    return () => {};
  }, []);

  const getAllActivities = async () => {
    const {activities} = await makeGET(ENDPOINT_ACTIVITIES);
    dispatch(getActivities(activities))
    setActivities(activities);
  };

  const editActivity = async (id) => {
    const response = await makeGET(`${ENDPOINT_ACTIVITIES}/${id}`);
    setActivityToEdit(response.Activity);
    setEdit(true);
  };

  const deleteActivity = (id) => {
    makeDELETE(`${ENDPOINT_ACTIVITIES}/${id}`);
    dispatch(removeActivity(id));
    setOpen(false);
    setActivities(activities.filter((item) => item.id !== id));
  };

  const handleClose = () => {
    setActivityToDelete('');
    setOpen(false);
  };

  if (edit) {
    return (
      <EditActivityForm
        getActivities={getActivities}
        activityToEdit={activityToEdit}
        setEdit={setEdit}
      ></EditActivityForm>
    );
  }
  if (activities) {
    return (
      <>
        <Container>
          <div style={{ width: '100%' }}>
            <Box display='flex'>
              <Box width='100%'>
                {' '}
                <Typography variant='h4' gutterBottom> Actividades </Typography>{' '}
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
                {activities.map((activity) => {
                  return (
                    <TableRow key={activity.id}>
                      <TableCell>{activity.name}</TableCell>
                      {isMobile ?
                        <TableCell className={classes.right}>
                          <IconButton
                            color='primary'
                            aria-label='Editar'
                            onClick={() => editActivity(activity.id)}
                          >
                            <EditIcon className={classes.icon} />
                          </IconButton>
                          <IconButton
                            color='secondary'
                            aria-label='Eliminar'
                            onClick={() => {
                              setActivityToDelete(activity.id);
                              setOpen(true);
                            }}
                          >
                            <DeleteIcon className={classes.icon} />
                          </IconButton>
                        </TableCell> :
                        <TableCell className={classes.right}>
                          <Button
                            variant='contained'
                            color='primary'
                            className={classes.button}
                            startIcon={<EditIcon className={classes.icon} />}
                            onClick={() => editActivity(activity.id)}
                          >
                            Editar
                          </Button>
                          <Button
                            variant='contained'
                            color='secondary'
                            className={classes.button}
                            startIcon={<DeleteIcon className={classes.icon} />}
                            onClick={() => {
                              setActivityToDelete(activity.id);
                              setOpen(true);
                            }}
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
            <Dialog open={open} onClose={handleClose}>
              <DialogTitle>
                ¿Seguro que desea eliminar la actividad?
              </DialogTitle>
              <DialogActions>
                <Button onClick={handleClose} color='secondary'>
                  Cancelar
                </Button>
                <Button
                  onClick={() => {
                    deleteActivity(activityToDelete);
                  }}
                  color='primary'
                  autoFocus
                >
                  Eliminar
                </Button>
              </DialogActions>
            </Dialog>
          </TableContainer>
        </Container>
      </>
    );
  } else {
    return <h1>No hay actividades para mostrar</h1>;
  }
};

export default Activities;
