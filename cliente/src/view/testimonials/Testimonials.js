import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import listTestimonials from './listTestimonials';
import useStyles from './style';

const Testimonials = () => {
  const classes = useStyles();
  return (
    <Grid container>
      {listTestimonials.map(({ id, name, image }) => (
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
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default Testimonials;
