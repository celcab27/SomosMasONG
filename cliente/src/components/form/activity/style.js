import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  form: {
    width: '100%', // Fix IE 11 issue.
    height: '100%',
    margin: theme.spacing(3, 0, 2),
    textAlign: 'center',
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  alert: {
    marginTop: theme.spacing(3),
  },
  imgPreview: {
    border: '2px solid black',
    marginTop: '1vh',
    width: '100%', // Fix IE 11 issue.
    height: '85%',
  },
  button: {
    margin: theme.spacing(1),
  },
}));

export default useStyles;
