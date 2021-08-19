/**@module view/news */
import React, { useEffect, useState } from 'react';
import { ENDPOINT_NEWS } from 'services/settings';
import { makeGET } from 'services/httpRequest';
import Entry from 'components/entries/Entry';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { useDispatch, useSelector } from 'react-redux';
import { getNews } from 'redux/news/actions/news';
import useStyles from './style';
/**
 * Component New is a react component to render the organization news
 * @function New
 * @example
 * import New from 'view/news/News.js'
 * <New/>
 */
const New = () => {
  const newsFromStore = useSelector((state) => state.news.news);
  const dispatch = useDispatch();
  const [news, setNews] = useState(null);
  const classes = useStyles();
  useEffect(() => {
    async function getAllNews() {
      const { news } = await makeGET(ENDPOINT_NEWS);
      dispatch(getNews(news));
      setNews(news);
      console.log('Se llamo a la api');
    }
    !newsFromStore ? getAllNews() : setNews(newsFromStore);
  }, []);

  if (!news)
    return (
      <Typography variant='h4' color='initial'>
        Cargando...
      </Typography>
    );

  return (
    <Grid container className={classes.container}>
      {news.map((item) => (
        <Entry news={item} key={item.id} />
      ))}
    </Grid>
  );
};

export default New;
