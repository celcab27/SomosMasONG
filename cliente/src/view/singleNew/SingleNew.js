/**@module view/singleNew */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { makeGET } from 'services/httpRequest';
import { ENDPOINT_NEWS } from 'services/settings';
import useStyles from './styles'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';

/**
 * Component SingleNew is a react component to render a single new get by id
 * @function SingleNew
 * @param {String} [props.id] - A string that represents the id of the new
 * @param {*} param0 
 * @returns 
 */
const SingleNew = () => {
  const { id } = useParams();
  const [news, setNews] = useState(null);
  const classes = useStyles();

  useEffect(() => {
    async function getNew(){
      const {newsDetail} = await makeGET(`${ENDPOINT_NEWS}/${id}`)
      setNews(newsDetail);
    };
    getNew();
  }, [id])

  if(!news) return(<Typography variant="h4" color="initial">Cargando...</Typography>)

  return (
    <Container maxWidth="md" className={classes.container}>
      <Card className={classes.root}>
        <CardMedia
          className={classes.media}
          image={news.image}
          title='Imagen de la noticia'
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">{news.name}</Typography>
          <Typography gutterBottom variant="body2" color="textSecondary" component="p">{news.content}</Typography>
        </CardContent>
      </Card>
    </Container>
  );
};

export default SingleNew;
