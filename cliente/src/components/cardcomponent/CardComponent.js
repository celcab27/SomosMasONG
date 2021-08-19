import React from 'react';
import useStyles from './style';
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Grid,
  Button,
} from '@material-ui/core';

/**
 * @module CardComponent
 * @function CardComponent
 * component used to display one element what contains title/image/content
 * @param {string} props.title title of card
 * @param {string} props.image (url) of image displayed in card
 * @param {string} props.content content/body of card
 *
 * @example import CardComponent from '/components/cardcomponent/CardComponent'
 * </CardComponent title={'some title'} image{'some-url.com'} content={'this is content of card'}>
 * @returns {void}
 */

const CardComponent = ({ botton, activities, vermas }) => {
  const { name, image, content } = activities;
  const classes = useStyles();

  return (
    <Grid className={classes.container}>
      <Card className={classes.card}>
        <CardMedia
          component='img'
          image={image}
          title={`${name} image`}
          className={classes.media}
        />
        <CardContent className={classes.content}>
          <Typography gutterBottom variant='h5' component='h3' className={classes.text}>
            {name}
          </Typography>
          <Typography variant='body1' component='p' className={classes.text}>
            {content}
          </Typography>
          <Button
          className={classes.button}
            size='medium'
            variant='contained'
            color='secondary'
            onClick={vermas}
          >
            {botton}
          </Button>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default CardComponent;
