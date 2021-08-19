import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '5vh',
    marginTop: '5vh',
  },
  iconos: {
    color: 'white',
  },
  raiz: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '10vh',
    marginBottom: '10vh',
  },
  background: {
    backgroundColor: '#e3f2fd',
    padding: '2vh',
    boxShadow: '15px 15px 10px -10px rgba(0,0,0,0.3)',
  },
  button: {
    margin: theme.spacing(2, 2, 0),
    width: theme.spacing(30),
  },
}));

export default useStyles;
