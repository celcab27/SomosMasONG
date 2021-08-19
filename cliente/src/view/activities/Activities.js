import React, { useEffect, useState } from 'react';
import { makeGET } from 'services/httpRequest';
import { ENDPOINT_ACTIVITIES } from 'services/settings';
import CardComponent from 'components/cardcomponent/CardComponent';
import { Grid, Container, Box, Typography } from '@material-ui/core';
import { useHistory, useRouteMatch } from 'react-router-dom';

const Activities = () => {
  const { url } = useRouteMatch();
  const history = useHistory();
  const [activities, setActivities] = useState([]);
  useEffect(() => {
    getActivities();

    return () => {};
  }, []);

  const getActivities = async () => {
    const ACTIVITIES = await makeGET(ENDPOINT_ACTIVITIES);
    setActivities(ACTIVITIES.activities);
  };
  const handleActivity = async (id) => {
    history.push(`${url}/${id}`);
  };
  return (
    <Container>
      <Box
        textAlign='center'
        marginBottom='5vh'
        marginTop='2vh'
        padding='1vh'
        bgcolor='#0086FF'
        color='white'
      >
        <Typography variant='h4'>Actividades de la ONG</Typography>
      </Box>

      <Grid container alignItems='center'>
        {activities
          ? activities.map((item, i) => (
              <Grid item xs='12' sm='6' md='4'>
                <CardComponent
                  key={i}
                  botton={'Ver más'}
                  activities={item}
                  vermas={() => handleActivity(item.id)}
                />
              </Grid>
            ))
          : 'Cargando...'}
      </Grid>
    </Container>
  );
};

export default Activities;
