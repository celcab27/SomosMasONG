import React, { useEffect, useState } from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getNews } from 'redux/news/actions/news'
import { makeGET } from 'services/httpRequest';
import { ENDPOINT_NEWS } from 'services/settings';
import New from 'components/new/New';
import { Grid, Box, Typography, Button } from '@material-ui/core';

const NewsBackoffice = () => {
  const dispatch = useDispatch();
  const newsFromStore = useSelector(state => state.news.news);
  const history = useHistory();
  const {url} = useRouteMatch();
  const [news, setNews] = useState([]);

  useEffect(() => {
    !newsFromStore ? obtainNews() : setNews(newsFromStore);
    return () => { };
  }, []);

  const obtainNews = async () => {
    try {
      console.log('Se llamo a la api');
      const {news} = await makeGET(ENDPOINT_NEWS);
      dispatch(getNews(news));
      setNews(news);
    } catch {
      console.error('Error between obtain news');
    }
  };

  const filterNews = (id) => {
    setNews(news.filter((item) => item.id !== id));
  };

  if (news) {
    return (
      <>
        <div style={{ width: '100%' }}>
          <Box display='flex'>
            <Box width='100%'>
              <Typography variant='h4'> Noticias </Typography>
            </Box>
            <Box>
              <Button
                onClick={() => history.push(`${url}/create`)}
                variant='contained'
                color='primary'
              >
                Crear
              </Button>
            </Box>
          </Box>
        </div>
        <Grid container justify='space-between'>
          {news.map((item, i) => (
            <New news={item} key={i} filterNews={filterNews} />
          ))}
        </Grid>
      </>
    );
  } else {
    return <h3>No hay noticias para mostrar.</h3>;
  }
};

export default NewsBackoffice;
