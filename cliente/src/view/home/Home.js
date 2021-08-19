import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getNews } from 'redux/news/actions/news';
import { Grid, Typography } from '@material-ui/core';
import CardNews from 'components/CardNews/CardNews';
import useStyles from './style.js';
import { makeGET } from 'services/httpRequest';
import { ENDPOINT_NEWS, ENDPOINT_PUBLICDATA } from 'services/settings';

const Home = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const newsFromStore = useSelector((state) => state.news.news);
  const publicDataFromStore = useSelector((state) => state.home.publicData);
  const [news, setNews] = useState([]);
  const [welcomeMessage, setWelcomeMessage] = useState('Bienvenido');

  async function getAllNews() {
    try {
      const { news } = await makeGET(ENDPOINT_NEWS);
      console.log(news);
      setNews(news.slice(-4));
      dispatch(getNews(news));
    } catch (error) {
      console.log(error);
    }
  }

  async function getPublicData() {
    try {
      const { publicData } = await makeGET(ENDPOINT_PUBLICDATA);
      setWelcomeMessage(publicData.welcomeText);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    !newsFromStore ? getAllNews() : setNews(newsFromStore.slice(-4));
    !publicDataFromStore
      ? getPublicData()
      : setWelcomeMessage(publicDataFromStore.welcomeText);
  }, []);

  return (
    <main className={classes.root}>
      <Grid
        container
        align='center'
        direction='column'
        className={classes.container}
      >
        <Typography
          variant='h3'
          component='h3'
          color='primary'
          align='center'
          className={classes.pageTitle}
        >
          Bienvenidos
        </Typography>
        <Typography component='h4' variant='h4' align='center'>
          {welcomeMessage.message}
        </Typography>
        {news.lenght === 0 ? (
          <h2>No hay novedades que mostrar</h2>
        ) : (
          <Grid container className={classes.newsContainer}>
            {news.map((item) => (
              <Grid item xs='12' sm='6' md='4'>
                <CardNews item={item} key={item.id} />
              </Grid>
            ))}
          </Grid>
        )}
      </Grid>
    </main>
  );
};

export default Home;
