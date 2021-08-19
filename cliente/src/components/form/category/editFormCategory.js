import { useState } from 'react';
import FormContainer from '../FormContainer.js';
import { FormControl, TextField, FormLabel, Button } from '@material-ui/core';
import AlertGenerator from 'components/utils/alert/AlertGenerator';
import { useFormik } from 'formik';
import useStyles from './editstyle';
import validate from './validation';
import submit from './editsubmit';

/**
 * Component EditCategoryForm will be use by the admin to edit any category
 * @function EditCategoryForm
 * @param {Object} -{activityToEdit: object, getActivities: function, setEdit: state (true/false)}
 * @example
 * import EditCategoryForm from 'components/forms/category/EditCategoryForm.js'
 * <EditCategoryForm categoryToEdit={{name: 'example name', content: 'example content', image: 'example url image'}}
 * getCategories={*Function to get categories*} setEdit={*edit state (true/false)*}/>
 */

const EditCategoryForm = ({ categoryToEdit, getCategories, setEdit }) => {
  // State to handler alert error show/hide.
  const [typeMSJ, setTypeMSJ] = useState();

  const classes = useStyles();
  const formik = useFormik({
    initialValues: {
      name: categoryToEdit.name,
      description: categoryToEdit.description,
    },
    enableReinitialize: true,
    validate,
    
    onSubmit: (values, { setSubmitting }) => {
      setTypeMSJ();
      submit(values, setSubmitting, setTypeMSJ, categoryToEdit.id);
    },
  });

  return (
    <FormContainer titleForm='Editar Categoria'>
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
          <FormLabel htmlFor='description'>Descripcion: </FormLabel>
          <TextField
            id='description'
            type='text'
            onChange={formik.handleChange}
            defaultValue={formik.values.description}
            error={formik.touched.description && Boolean(formik.errors.description)}
            helperText={formik.touched.description && formik.errors.description}
          />
        </FormControl>
        <div>
          <Button
            className={`${classes.button}`}
            variant='contained'
            color='secondary'
            onClick={() => {
              getCategories();
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
            onClick={() => {
              {/*getCategories();*/}
              setEdit(true);
            }}
          >
            Enviar
          </Button>
        </div>
        {typeMSJ === 'success' && (
          <AlertGenerator
            alertTitle='Success:'
            contentText='Se ha editado la categoria con exito'
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

export default EditCategoryForm;