/** @module Form/Login */
import { useState } from 'react';
import { useHistory, Link as RouterLink } from 'react-router-dom';
import AlertGenerator from 'components/utils/alert/AlertGenerator';
import { useFormik } from 'formik';
import validation from './validation';
import submit from './submit';
import FormContainer from '../FormContainer.js';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import useStyles from './styles/style';

/**
 * Component FormLogin is react component to render a basic form login.
 * @function FormLogin
 * @param {String} [props.linkToSignUp="#"] - A string like a URL of redirect to SignUp.
 * @param {Function} [props.changeSubmit=submit] - A custom function to change default function onSubmit.
 * @example
 * import FormLogin from "components/form/login/FormLogin.js"
 * <FormLogin />
 * <FormLogin linkToSignUp="/signup" />
 * <FormLogin linkToSignUp="http://anotherweb/signup" />
 * <FormLogin changeSubmit={myCustomSubmit} />
 */
const FormLogin = ({ linkToSignUp = '#', changeSubmit = submit }) => {
  // State to handler alert error show/hide.
  const [errorReturnForm, setErrorReturnForm] = useState(false);
  // React Router function to redirect user if register is correct.
  const history = useHistory();
  const classes = useStyles();
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validate: validation,
    onSubmit: (values, { setSubmitting }) => {
      setErrorReturnForm(false);
      changeSubmit(values, setSubmitting, setErrorReturnForm, history.push);
    },
  });
  return (
    <FormContainer titleForm='Ingrese a la página'>
      <form className={classes.form} onSubmit={formik.handleSubmit}>
        <Grid container spacing={2}>
          {/* Input Email */}
          <Grid item xs={12}>
            <TextField
              variant='outlined'
              required
              fullWidth
              id='email'
              label='Correo electrónico'
              name='email'
              autoComplete='email'
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
          </Grid>
          {/* Input Password */}
          <Grid item xs={12}>
            <TextField
              variant='outlined'
              required
              fullWidth
              name='password'
              label='Contraseña'
              type='password'
              id='password'
              autoComplete='current-password'
              value={formik.values.password}
              onChange={formik.handleChange}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
            />
          </Grid>
        </Grid>
        {/* Error Alert if form return back a error */}
        {!errorReturnForm || (
          <AlertGenerator
            alertTitle='Error:'
            contentText='Disculpe, ha ocurrido un error. Por favor, contacte con soporte'
            variant='filled'
            className={classes.alert}
          />
        )}
        {/* Button Submit */}
        <Button
          disabled={formik.isSubmitting}
          type='submit'
          fullWidth
          variant='contained'
          color='primary'
          className={classes.submit}
        >
          {formik.isSubmitting ? 'Cargando...' : 'Ingresar'}
        </Button>
        <Grid container justify='flex-end'>
          <Grid item>
            <Link
              to={linkToSignUp}
              component={RouterLink}
              variant='body2'
              color='inherit'
            >
              ¿No tiene una cuenta?. Regístrese.
            </Link>
          </Grid>
        </Grid>
      </form>
    </FormContainer>
  );
};

export default FormLogin;
