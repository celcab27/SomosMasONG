/**@module Form/Contact */
import { useState } from 'react';
import AlertGenerator from 'components/utils/alert/AlertGenerator';
import FormContainer from '../FormContainer.js';
import { FormControl, TextField, FormLabel, Button } from '@material-ui/core';
import { useFormik } from 'formik';
import validate from './validation';
import submit from './submit';
import useStyles from './style';
/**
 * Component FormContact is a form for Contact section.
 * @function FormContact
 * @example
 * import FormContact from 'components/forms/contact/FormContact.js'
 * <FormContact />
 */
const FormContact = ({ changeSubmit = submit }) => {
  // State to handler alert error show/hide.
  const [typeMSJ, setTypeMSJ] = useState();
  const classes = useStyles();
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: '',
    },
    validate,
    onSubmit: (values, { setSubmitting }) => {
      setTypeMSJ();
      changeSubmit(values, setSubmitting, setTypeMSJ);
    },
  });
  return (
    <FormContainer titleForm='Formulario de Contacto'>
      <form className={classes.form} onSubmit={formik.handleSubmit}>
        <FormControl className={classes.formControl}>
          <FormLabel required htmlFor='nameInput'>
            Nombre
          </FormLabel>
          <TextField
            id='name'
            type='text'
            onChange={formik.handleChange}
            defaultValue={formik.values.name}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
          />
        </FormControl>
        <FormControl className={classes.formControl}>
          <FormLabel required htmlFor='emailInput'>
            Email de Contacto
          </FormLabel>
          <TextField
            id='email'
            type='email'
            onChange={formik.handleChange}
            defaultValue={formik.values.email}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
        </FormControl>
        <FormControl className={classes.formControl}>
          <FormLabel required htmlFor='messageInput'>
            Mensaje
          </FormLabel>
          <TextField
            id='message'
            aria-describedby='my-helper-text'
            multiline
            rows={5}
            type='text'
            onChange={formik.handleChange}
            defaultValue={formik.values.message}
            error={formik.touched.message && Boolean(formik.errors.message)}
            helperText={formik.touched.message && formik.errors.message}
          />
        </FormControl>
        <Button
          disabled={formik.isSubmitting}
          variant='contained'
          className={classes.button}
          color='secondary'
          type='submit'
        >
          Enviar
        </Button>
        {/* Alert if is success or error */}
        {typeMSJ === 'success' && (
          <AlertGenerator
            alertTitle='Success:'
            contentText='Se ha enviado con exito el formulario de contacto. Tendrá una respuesta lo más pronto posible. Gracias.'
            variant='filled'
            severity='success'
            className={classes.alert}
          />
        )}
        {typeMSJ === 'error' && (
          <AlertGenerator
            alertTitle='Error:'
            contentText='Lo sentimos, un error a ocurrido con su intento por enviar este formulario de contacto. Por favor, contactar con el soporte.'
            variant='filled'
            className={classes.alert}
          />
        )}
      </form>
    </FormContainer>
  );
};

export default FormContact;
