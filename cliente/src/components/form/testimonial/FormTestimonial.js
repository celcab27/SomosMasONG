/**@module Form/Testimonial */
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import AlertGenerator from 'components/utils/alert/AlertGenerator';
import FormContainer from '../FormContainer.js';
import {
  Input,
  Grid,
  FormLabel,
  FormHelperText,
  TextField,
  Button,
} from '@material-ui/core';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { useFormik } from 'formik';
import validate from './validation';
import submit from './submit';
import useStyles from './style';
/**
 * Component FormTestimonial is a form for testimonial section.
 * @function FormTestimonial
 * @param {Object} prevTestimony - An object with attributes of previous testimony to edit.
 * @param {Function} [props.changeSubmit=submit] - A custom function to change default function onSubmit.
 * @example
 * // Example for new testimony.
 * import FormTestimony from 'components/forms/testimony/FormTestimony.js'
 * <FormTestimony />
 * @example
 * // Example for edit testimony.
 * import FormTestimony from 'components/forms/testimony/FormTestimony.js'
 * const testimony = {id: 6, name: "Añadir bolsas", content: "Es necesario agregar bolsas de reclables a las actuales."}
 * <FormTestimony prevTestimony={testimony} />
 */
const FormTestimonial = ({ prevTestimony = null, changeSubmit = submit }) => {
  const dispatch = useDispatch();
  // State to handler alert error/success show/hide.
  const [typeMSJ, setTypeMSJ] = useState();
  const [imgPreview, setImgPreview] = useState(null);
  const classes = useStyles();
  const formik = useFormik({
    initialValues: {
      name: prevTestimony ? prevTestimony.name : '',
      image: prevTestimony ? prevTestimony.image : '',
      content: prevTestimony ? prevTestimony.content : '',
    },
    validate,
    onSubmit: (values, { setSubmitting }) => {
      setTypeMSJ();
      changeSubmit(values, setSubmitting, setTypeMSJ, prevTestimony?.id, dispatch);
    },
  });
  return (
    <FormContainer
      titleForm={
        prevTestimony
          ? 'Formulario Editar Testimonio'
          : 'Formulario Crear Testimonio'
      }
    >
      <form className={classes.form} onSubmit={formik.handleSubmit}>
        {/* Input name */}
        <Grid item xs={12}>
          <FormLabel required htmlFor='name'>
            Nombre:
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
        {/* Input content */}
        <Grid item xs={12} className={classes.submit}>
          <FormLabel required htmlFor='content'>
            Contenido:
          </FormLabel>
          <CKEditor
            id='content'
            editor={ClassicEditor}
            data={
              prevTestimony
                ? prevTestimony.content
                : '¡Escribe el testimonio, Aquí!'
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
        <Grid item xs={12}>
          <Grid
            item
            xs={12}
            container
            direction='row'
            justify='space-between'
            alignItems='center'
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
            {formik.touched.image && formik.errors.image}
          </FormHelperText>
        </Grid>
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
            contentText='Se ha enviado con exito el formulario de testimonio. Gracias.'
            variant='filled'
            severity='success'
            className={classes.alert}
          />
        )}
        {typeMSJ === 'error' && (
          <AlertGenerator
            alertTitle='Error:'
            contentText='Lo sentimos, un error a ocurrido con su intento por enviar este formulario de testimonio. Por favor, contactar con el soporte.'
            variant='filled'
            className={classes.alert}
          />
        )}
      </form>
    </FormContainer>
  );
};

export default FormTestimonial;