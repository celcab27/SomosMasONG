/** @module Form/News */
import { useEffect, useState } from 'react';
import { makeGET } from 'services/httpRequest';
import { ENDPOINT_CATEGORY } from 'services/settings';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import validation from './validation';
import submit from './submit';
import FormContainer from '../FormContainer.js';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormLabel from '@material-ui/core/FormLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Input from '@material-ui/core/Input';
import Grid from '@material-ui/core/Grid';
import useStyles from './style';
import AlertGenerator from 'components/utils/alert/AlertGenerator';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
/**
 * Component FormNews is react component to render a basic form news and edit.
 * @function FormNews
 * @param {Object} prevNews - An object with attributes of previous news to edit.
 * @param {Function} [props.changeSubmit=submit] - A custom function to change default function onSubmit.
 * @example
 * // Example for News.
 * import FormNews from "components/form/News/FormNews.js"
 * <FormNews />
 * <FormNews changeSubmit={myCustomSubmit} />
 * @example
 * // Example for Edit.
 * import FormEdit from "components/form/News/FormNews.js"
 * const myNewsToEdit = {id, title, image, category, contain};
 * <FormEdit prevNews={myNewsToEdit} />
 */

const FormNews = ({ prevNews = null, changeSubmit = submit }) => {
  const dispatch = useDispatch();
  const [categories, setCategories] = useState([]);
  const [imgPreview, setImgPreview] = useState(null);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const fetchCategories = async () => {
      const data = await makeGET(ENDPOINT_CATEGORY);
      setCategories(data.categories);
    };
    fetchCategories();
  }, []);

  const classes = useStyles();
  const formik = useFormik({
    initialValues: {
      name: prevNews ? prevNews.name : '',
      image: prevNews ? prevNews.image : '',
      type: prevNews ? prevNews.type : '',
      content: prevNews ? prevNews.content : '',
    },
    validate: validation,
    onSubmit: (values, { setSubmitting }) => {
      setSuccess(true);
      changeSubmit(values, setSubmitting, prevNews?.id, dispatch);
    },
  });

  return (
    <FormContainer titleForm='Formulario Novedades'>
      <form className={classes.form} onSubmit={formik.handleSubmit}>
        <Grid container spacing={2}>
          {/* Input title */}
          <Grid item xs={12}>
            <FormLabel required htmlFor='title'>
              Título:
            </FormLabel>
            <TextField
              autoComplete='ftitle'
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
          {/* Input category */}
          <Grid item xs={12}>
            <FormLabel required htmlFor='type'>
              Categorías:
            </FormLabel>
            <Select
              required
              className={classes.select}
              id='type'
              name='type'
              variant='outlined'
              value={formik.values.type}
              onChange={formik.handleChange}
            >
              {categories.map((category, i) => (
                <MenuItem key={i} value={category.name}>
                  {category.name}
                </MenuItem>
              ))}
            </Select>
            <FormHelperText style={{ color: 'red' }}>
              {formik.touched.type && formik.errors.type}
            </FormHelperText>
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
          {/* Input contain in CKEDITOR */}
          <Grid item xs={12}>
            <CKEditor
              id='content'
              editor={ClassicEditor}
              data={
                prevNews ? prevNews.content : '¡Escribe el contenido, Aquí!'
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
          {/* Button Submit */}
          <Button
            disabled={formik.isSubmitting}
            type='submit'
            fullWidth
            variant='contained'
            color='primary'
            className={classes.submit}
          >
            {formik.isSubmitting ? 'Cargando...' : 'Enviar'}
          </Button>
          {/* Alert Success*/}
          {success && (
            <AlertGenerator
              alertTitle='Success:'
              contentText='Se ha enviado con exito el formulario de actividades. Gracias.'
              variant='filled'
              severity='success'
              className={classes.alert}
            />
          )}
        </Grid>
      </form>
    </FormContainer>
  );
};

export default FormNews;
