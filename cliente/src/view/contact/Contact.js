import React from 'react';
import { Container, Grid, Typography, Box } from '@material-ui/core';
import FormContact from 'components/form/contact/FormContact';
import useStyles from './styles';

/**This is a view for '/contactos'. It contains two columns (left is for text and right is for a contact form)
 * @function Contact
 * @example
 * <Contact />
 * import Contact from 'view/contact/Contact.js'
 * */

const Contact = () => {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <h1 className={classes.text}>¡Escríbenos un mensaje!</h1>
      <FormContact></FormContact>
    </Container>
  );
};

export default Contact;
