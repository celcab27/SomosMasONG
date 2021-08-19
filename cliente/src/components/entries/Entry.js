import React from 'react';
import { useHistory } from 'react-router-dom';
import useStyles from './style';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const Entry = ({ news }) => {
  const history = useHistory();
  const classes = useStyles();
  const { name, image, id } = news;

  const onClickHandler = (id) => {
    history.push(`/novedades/${id}`);
  };

  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Card className={classes.grid}>
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
          <Button
            className={classes.button}
            onClick={() => onClickHandler(id)}
            variant='contained'
            color='secondary'
          >
            Ver más
          </Button>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default Entry;
