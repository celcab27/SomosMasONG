import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  form: {
    width: '125%', // Fix IE 11 issue.
    height: '100%',
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  select: {
    width: '100%',
  },
  imgPreview: {
    border: '2px solid black',
    marginTop: '1vh',
    width: '100%', // Fix IE 11 issue.
    height: '85%',
  },
}));

export default useStyles;
