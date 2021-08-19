import { useState } from 'react';
import FormContainer from '../FormContainer.js';
import {
  FormControl,
  TextField,
  FormLabel,
  Button,
  Input,
} from '@material-ui/core';
import AlertGenerator from 'components/utils/alert/AlertGenerator';
import { useFormik } from 'formik';
import useStyles from './style';
import validate from './validate';
import submit from './submit';

/**
 * Component EditActivityForm will be use by the admin to edit any activity
 * @function EditActivityForm
 * @param {Object} -{activityToEdit: object, getActivities: function, setEdit: state (true/false)}
 * @example
 * import EditActivityForm from 'components/forms/editActivity/EditActivityForm.js'
 * <EditActivityForm activityToEdit={{name: 'example name', content: 'example content', image: 'example url image'}}
 * getActivities={*Function to get activities*} setEdit={*edit state (true/false)*}/>
 */

const EditActivityForm = ({ activityToEdit, getActivities, setEdit }) => {
  // State to handler alert error show/hide.
  const [typeMSJ, setTypeMSJ] = useState();
  const [imgPreview, setImgPreview] = useState(null);

  const classes = useStyles();
  const formik = useFormik({
    initialValues: {
      name: activityToEdit.name,
      content: activityToEdit.content,
      image: activityToEdit.image,
      id: activityToEdit.id,
    },
    enableReinitialize: true,
    validate,
    onSubmit: (values, { setSubmitting }) => {
      setTypeMSJ();
      submit(values, setSubmitting, setTypeMSJ);
    },
  });

  return (
    <FormContainer titleForm='Editar Actividad'>
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
          <Button color='primary' variant='contained' component='label'>
            Subir Archivo
            <Input
              id='image'
              name='image'
              type='file'
              style={{ display: 'none' }}
              accept='image/*'
              fullWidth
              onChange={(event) => {
                formik.setFieldValue('image', event.currentTarget.files[0]);
                setImgPreview(
                  URL.createObjectURL(event.currentTarget.files[0]),
                );
              }}
            />
          </Button>
          {imgPreview && !formik.errors.image && (
            <img
              className={classes.imgPreview}
              alt='Upload img'
              src={imgPreview}
            />
          )}
        </FormControl>
        <FormControl className={classes.formControl}>
          <FormLabel htmlFor='content'>Content: </FormLabel>
          <TextField
            id='content'
            type='text'
            onChange={formik.handleChange}
            defaultValue={formik.values.content}
            error={formik.touched.content && Boolean(formik.errors.content)}
            helperText={formik.touched.content && formik.errors.content}
          />
        </FormControl>
        <div>
          <Button
            className={`${classes.button}`}
            variant='contained'
            color='secondary'
            onClick={() => {
              getActivities();
              setEdit(false);
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
            contentText='Se ha editado la actividad con exito'
            variant='filled'
            severity='success'
            className={classes.alert}
          />
        )}
        {typeMSJ === 'error' && (
          <AlertGenerator
            alertTitle='Error:'
            contentText='Lo sentimos, ha ocurrido un error durante la edición de la actividad'
            variant='filled'
            className={classes.alert}
          />
        )}
      </form>
    </FormContainer>
  );
};

export default EditActivityForm;
