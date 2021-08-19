import React, { useEffect, useState } from 'react';
import { Container, Grid, Typography, Box } from '@material-ui/core';
import Slider from 'components/slider/Slider';
import useStyles from './style.js';
import Members from 'components/aboutUs/Members';
import { ENDPOINT_MEMBERS } from 'services/settings';
import { makeGET } from 'services/httpRequest';

const AboutUs = () => {
  const [members, setMembers] = useState([]);
  useEffect(() => {
    async function getMembers() {
      const AllMembers = await makeGET(ENDPOINT_MEMBERS);
      setMembers(AllMembers.allMembers);
    }
    getMembers();
  }, []);
  const classes = useStyles();
  return (
    <Container className={classes.root}>
      <Slider />
      <Box className={classes.pageSeparator}>
        <Typography variant='h4'>Sobre Nosotros</Typography>
      </Box>
      <Grid className={classes.textContainer}>
        <Typography variant='h6' className={classes.text}>
          Desde 1997 en Somos Más trabajamos con los chicos y chicas, mamás y
          papás, abuelos y vecinos del barrio La Cava generando procesos de
          crecimiento y de inserción social. Uniendo las manos de todas las
          familias, las que viven en el barrio y las que viven fuera de él, es
          que podemos pensar, crear y garantizar estos procesos. ﻿ Somos una
          asociación civil sin fines de lucro que se creó en 1997 con la
          intención de dar alimento a las familias del barrio. Con el tiempo
          fuimos involucrándonos con la comunidad y agrandando y mejorando
          nuestra capacidad de trabajo. Hoy somos un centro comunitario que
          acompaña a más de 700 personas a través de las áreas de: Educación,
          deportes, primera infancia, salud, alimentación y trabajo social.
        </Typography>
      </Grid>
      <Box className={classes.pageSeparator}>
        <Typography variant='h4'>Visión</Typography>
      </Box>
      <Grid className={classes.textContainer}>
        <Typography variant='h6' className={classes.text}>
          Mejorar la calidad de vida de niños y familias en situación de
          vulnerabilidad en el barrio La Cava, otorgando un cambio de rumbo en
          cada individuo a través de la educación, salud, trabajo, deporte,
          responsabilidad y compromiso.
        </Typography>
      </Grid>
      <Box className={classes.pageSeparator}>
        <Typography variant='h4'>Misión</Typography>
      </Box>
      <Grid className={classes.textContainer}>
        <Typography variant='h6' className={classes.text}>
          Trabajar articuladamente con los distintos aspectos de la vida de las
          familias, generando espacios de desarrollo personal y familiar,
          brindando herramientas que logren mejorar la calidad de vida a través
          de su propio esfuerzo.
        </Typography>
      </Grid>

      <Box className={classes.pageSeparator}>
        <Typography variant='h4'>Miembros de Somos Más</Typography>
      </Box>

      <Grid container justify='space-between'>
        {members
          ? members.map((item, i) => (
              <Members
                key={i}
                name={item.name}
                image={item.image}
                createdAt={item.createdAt}
              />
            ))
          : ''}
      </Grid>
    </Container>
  );
};

export default AboutUs;
