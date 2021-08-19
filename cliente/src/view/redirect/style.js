import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: '#0086FF',
    width: '100%',
    minHeight: '100vh',
  },
  alertContainer: {
    minHeight: '100vh',
    backgroundColor: 'white',
    width: '80%',
    padding: theme.spacing(2, 2),
  },
  logo: {
    margin: theme.spacing(4, 0),
  },
  text: {
    margin: theme.spacing(4, 0),
    [theme.breakpoints.down('md')]: {
      fontSize: '2rem',
    },
  },
  button: {
    margin: theme.spacing(4, 0),
  },
}));

export default useStyles;
