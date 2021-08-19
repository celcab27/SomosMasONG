import useStyles from './style.js';
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
} from '@material-ui/core';

const Members = (Members) => {
  const classes = useStyles();
  const { createdAt, name, image } = Members;
  return (
    <Grid item xs={12} md={5} lg={3} xl={2} className={classes.member}>
      <CardMedia
        className={classes.cardImage}
        component='img'
        alt='Miembros de la ONG'
        image={image}
        title={name}
      />
      <Card>
        <CardContent className={classes.cardContent}>
          <Typography gutterBottom variant='h5' component='h2'>
            {name}
          </Typography>
          <Typography variant='body2'>
            MIEMBRO DESDE
            <br />
            {createdAt ? createdAt.slice(0, 10) : ''}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default Members;
