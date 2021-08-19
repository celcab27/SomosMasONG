import {
  Button,
  Typography,
  Card,
  CardActions,
  CardContent,
  CardMedia,
} from '@material-ui/core';
import useStyles from './style';

const CardNews = ({ item }) => {
  const classes = useStyles();
  return (
    <Card className={classes.item}>
      <CardContent>
        <Typography className={classes.title}>{item.name}</Typography>
        <CardMedia
          component='img'
          image={item.image}
          title={`image`}
          className={classes.media}
        />
      </CardContent>
    </Card>
  );
};

export default CardNews;
