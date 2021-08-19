import { useState } from 'react';
import FormContainer from '../FormContainer.js';
import { FormControl, TextField, FormLabel, Button } from '@material-ui/core';
import AlertGenerator from 'components/utils/alert/AlertGenerator';
import { useFormik } from 'formik';
import useStyles from './style';
import validate from './validate';
import submit from './submit';

/**
 * Component PublicDataForm will be use by the admin to edit any activity
 * @function PublicDataForm
 * @param {Object} -{publicData: object,  setEdit: state (true/false), getPublicData: function}
 * @example
 * import PublicDataForm from 'components/forms/editActivity/PublicDataForm.js'
 * <PublicDataForm publicData={publicData}
 * getPublicData={*Function to get public data*} setEdit={*edit state (true/false)*}/>
 */

const PublicDataForm = ({ publicData, setEdit, getPublicData }) => {
  // State to handler alert error show/hide.
  const [typeMSJ, setTypeMSJ] = useState();

  const classes = useStyles();
  const formik = useFormik({
    initialValues: {
      name: publicData.name,
      image: publicData.image,
      phone: publicData.phone,
      address: publicData.address,
      welcomeText: publicData.welcomeText,
      instagram: publicData.instagram,
      linkedin: publicData.linkedin,
      facebook: publicData.facebook,
    },
    enableReinitialize: true,
    validate,
    onSubmit: (values, { setSubmitting }) => {
      setTypeMSJ();
      submit(values, setTypeMSJ);
    },
  });

  return (
    <FormContainer titleForm='Editar Datos Publicos'>
      <form className={classes.form} onSubmit={formik.handleSubmit}>
        <FormControl className={classes.formControl}>
          <FormLabel htmlFor='name'>Nombre: </FormLabel>
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
          <FormLabel htmlFor='image'>Imagen: </FormLabel>
          <TextField
            id='image'
            type='text'
            onChange={formik.handleChange}
            defaultValue={formik.values.image}
            error={formik.touched.image && Boolean(formik.errors.image)}
            helperText={formik.touched.image && formik.errors.image}
          />
        </FormControl>
        <FormControl className={classes.formControl}>
          <FormLabel htmlFor='image'>Telefono: </FormLabel>
          <TextField
            id='phone'
            type='text'
            onChange={formik.handleChange}
            defaultValue={formik.values.phone}
            error={formik.touched.phone && Boolean(formik.errors.phone)}
            helperText={formik.touched.phone && formik.errors.phone}
          />
        </FormControl>
        <FormControl className={classes.formControl}>
          <FormLabel htmlFor='address'>Dirección: </FormLabel>
          <TextField
            id='address'
            type='text'
            onChange={formik.handleChange}
            defaultValue={formik.values.address}
            error={formik.touched.address && Boolean(formik.errors.address)}
            helperText={formik.touched.address && formik.errors.address}
          />
        </FormControl>
        <FormControl className={classes.formControl}>
          <FormLabel htmlFor='welcomeText'>Texto de bienvenida: </FormLabel>
          <TextField
            id='welcomeText'
            type='text'
            onChange={formik.handleChange}
            defaultValue={formik.values.welcomeText}
            error={
              formik.touched.welcomeText && Boolean(formik.errors.welcomeText)
            }
            helperText={formik.touched.welcomeText && formik.errors.welcomeText}
          />
        </FormControl>
        <FormControl className={classes.formControl}>
          <FormLabel htmlFor='instagram'>Instagram: </FormLabel>
          <TextField
            id='instagram'
            type='text'
            onChange={formik.handleChange}
            defaultValue={formik.values.instagram}
            error={formik.touched.instagram && Boolean(formik.errors.instagram)}
            helperText={formik.touched.instagram && formik.errors.instagram}
          />
        </FormControl>
        <FormControl className={classes.formControl}>
          <FormLabel htmlFor='linkedin'>Linkedin: </FormLabel>
          <TextField
            id='linkedin'
            type='text'
            onChange={formik.handleChange}
            defaultValue={formik.values.linkedin}
            error={formik.touched.linkedin && Boolean(formik.errors.linkedin)}
            helperText={formik.touched.linkedin && formik.errors.linkedin}
          />
        </FormControl>
        <FormControl className={classes.formControl}>
          <FormLabel htmlFor='facebook'>Facebook: </FormLabel>
          <TextField
            id='facebook'
            type='text'
            onChange={formik.handleChange}
            defaultValue={formik.values.facebook}
            error={formik.touched.facebook && Boolean(formik.errors.facebook)}
            helperText={formik.touched.facebook && formik.errors.facebook}
          />
        </FormControl>
        <div>
          <Button
            className={`${classes.button}`}
            variant='contained'
            color='secondary'
            onClick={() => {
              setEdit(false);
              getPublicData();
            }}
          >
            Volver
          </Button>
          <Button
            className={`${classes.button}`}
            disabled={formik.isSubmitting}
            variant='contained'
            color='primary'
            type='submit'
          >
            Enviar
          </Button>
        </div>
        {typeMSJ === 'success' && (
          <AlertGenerator
            alertTitle='Success:'
            contentText='Se han editado los datos publicos con exito'
            variant='filled'
            severity='success'
            className={classes.alert}
          />
        )}
        {typeMSJ === 'error' && (
          <AlertGenerator
            alertTitle='Error:'
            contentText='Lo sentimos, ha ocurrido un error durante la edición de los datos publicos'
            variant='filled'
            className={classes.alert}
          />
        )}
      </form>
    </FormContainer>
  );
};

export default PublicDataForm;
