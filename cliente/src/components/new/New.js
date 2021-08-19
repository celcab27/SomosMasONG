import React, { useState } from 'react';
import useStyles from './style.js';
import { useDispatch } from 'react-redux';
import { deleteNews } from 'redux/news/actions/news';
import DeleteIcon from '@material-ui/icons/Delete';
import AlertDelete from '../utils/alertDelete/AlertDelete';
import { makeDELETE } from 'services/httpRequest';
import { ENDPOINT_NEWS } from 'services/settings';
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
} from '@material-ui/core';

const New = ({ news, filterNews }) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const { createdAt, name, image, id } = news;
  const [toastOpen, setToastOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const handleDeleteNews = () => {
    setOpenModal(true);
  };
  const handleDeleteCancel = () => {
    setOpenModal(false);
  };
  const handleDeleteConfirm = async () => {
    setOpenModal(false);
    setToastOpen(true);
    const DeleteNew = await makeDELETE(`${ENDPOINT_NEWS}/${id}`);
    console.log(DeleteNew);
    dispatch(deleteNews(id));
    filterNews(id);
  };

  return (
    <Grid item xs={12} md={5} lg={3} xl={2} className={classes.new}>
      <Card>
        <CardMedia
          className={classes.cardImage}
          component='img'
          alt='Imagen de novedad'
          image={image}
          title={name}
        />
        <CardContent className={classes.cardContent}>
          <Typography gutterBottom variant='h5' component='h2'>
            {name}
          </Typography>
          <Typography variant='body2'>
            {createdAt ? createdAt.slice(0, 10) : ''}
          </Typography>
          <Button
            className={classes.button}
            onClick={handleDeleteNews}
            variant='contained'
            startIcon={<DeleteIcon />}
            color='secondary'
          >
            Eliminar
          </Button>
        </CardContent>
      </Card>
      {
        <AlertDelete
          open={openModal}
          cancelar={handleDeleteCancel}
          confirmar={handleDeleteConfirm}
          snack={toastOpen}
          onClose={() => setToastOpen(false)}
          closeIcon={() => setToastOpen(false)}
          message={`¿Desea eliminar la noticia "${news.name}"?`}
          toastMessage={'Noticia eliminada'}
        />
      }
    </Grid>
  );
};

export default New;
