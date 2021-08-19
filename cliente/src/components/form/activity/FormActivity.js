/**@module Form/Activity */
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import AlertGenerator from 'components/utils/alert/AlertGenerator';
import FormContainer from '../FormContainer.js';
import {
  Grid,
  FormLabel,
  FormHelperText,
  TextField,
  Button,
  Input,
} from '@material-ui/core';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { useFormik } from 'formik';
import validate from './validation';
import submit from './submit';
import useStyles from './style';
/**
 * Component FormActivity is a form for activity section.
 * @function FormActivity
 * @param {Object} prevActivity - An object with attributes of previous activity to edit.
 * @param {Function} [props.changeSubmit=submit] - A custom function to change default function onSubmit.
 * @example
 * // Example for new activity.
 * import FormActivity from 'components/forms/activity/FormActivity.js'
 * <FormActivity />
 * @example
 * // Example for edit activity.
 * import FormActivity from 'components/forms/activity/FormActivity.js'
 * const activity = {id: 6, name: "Añadir bolsas", content: "Es necesario agregar bolsas de reclables a las actuales."}
 * <FormActivity prevActivity={activity} />
 */
const FormActivity = ({ prevActivity = null, changeSubmit = submit }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  // State to handler alert error/success show/hide.
  const [typeMSJ, setTypeMSJ] = useState();
  const [imgPreview, setImgPreview] = useState(null);
  const classes = useStyles();
  const formik = useFormik({
    initialValues: {
      name: prevActivity ? prevActivity.name : '',
      content: prevActivity ? prevActivity.content : '',
    },
    validate,
    onSubmit: (values, { setSubmitting }) => {
      setTypeMSJ();
      changeSubmit(
        values,
        setSubmitting,
        setTypeMSJ,
        prevActivity?.id,
        dispatch,
      );
    },
  });
  return (
    <FormContainer
      titleForm={
        prevActivity
          ? 'Formulario Editar Actividad'
          : 'Formulario Crear Nueva Actividad'
      }
    >
      <form className={classes.form} onSubmit={formik.handleSubmit}>
        {/* Input name */}
        <Grid item xs={12}>
          <FormLabel required htmlFor='name'>
            Actividad:
          </FormLabel>
          <TextField
            autoComplete='fname'
            name='name'
            variant='outlined'
            required
            fullWidth
            id='name'
            autoFocus
            value={formik.values.name}
            onChange={formik.handleChange}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
          />
        </Grid>
        {/* Input file image */}
        <Grid item xs={12}>
          <Grid
            item
            xs={12}
            container
            direction='row'
            justify='space-between'
            alignItems='center'
            className={classes.form}
          >
            <FormLabel required htmlFor='image'>
              Archivo de Imagen:
            </FormLabel>
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
          </Grid>
          {imgPreview && !formik.errors.image && (
            <img
              className={classes.imgPreview}
              alt='Upload img'
              src={imgPreview}
            />
          )}
          <FormHelperText style={{ color: 'red' }}>
            {!formik.touched.image && formik.errors.image}
          </FormHelperText>
        </Grid>
        {/* Input content */}
        <Grid item xs={12} className={classes.submit}>
          <FormLabel required htmlFor='content'>
            Contenido:
          </FormLabel>
          <CKEditor
            id='content'
            editor={ClassicEditor}
            data={
              prevActivity
                ? prevActivity.content
                : '¡Escribe la actividad, Aquí!'
            }
            value={formik.values.content}
            onChange={(event, editor) => {
              formik.setFieldValue('content', editor.getData());
            }}
          />
          <FormHelperText style={{ color: 'red' }}>
            {formik.touched.content && formik.errors.content}
          </FormHelperText>
        </Grid>
        {/* Button for submit form */}
        <Button
            className={`${classes.button}`}
            variant='contained'
            color='secondary'
            onClick={() => history.push(`/backoffice/activities`)
            }
          >
            Volver
          </Button>
        {/* Button for submit form */}
        <Button
          disabled={formik.isSubmitting}
          variant='contained'
          className={classes.button}
          color='secondary'
          type='submit'
        >
          {formik.isSubmitting ? 'Enviando...' : 'Enviar'}
        </Button>
        {/* Alert if is success or error */}
        {typeMSJ === 'success' && (
          <AlertGenerator
            alertTitle='Success:'
            contentText='Se ha enviado con exito el formulario de actividades. Gracias.'
            variant='filled'
            severity='success'
            className={classes.alert}
          />
        )}
        {typeMSJ === 'error' && (
          <AlertGenerator
            alertTitle='Error:'
            contentText='Lo sentimos, un error a ocurrido con su intento por enviar este formulario de Actividad. Por favor, contactar con el soporte.'
            variant='filled'
            className={classes.alert}
          />
        )}
      </form>
    </FormContainer>
  );
};

export default FormActivity;
