import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  form: {
    width: '100%',
    marginBottom: theme.spacing(8),
    paddingTop: '0px',
    marginTop: '0px',
  },
  formControl: {
    paddingTop: '0px',
    marginTop: '5px',
    alignSelf: 'flex-start',
    width: '100%',
    paddingBottom: theme.spacing(2),
  },
  button: {
    float: 'right',
  },
  alert: {
    marginTop: theme.spacing(6),
    padding: theme.spacing(3),
  },
}));

export default useStyles;
