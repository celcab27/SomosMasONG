import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '0',
    width: '100%',
    marginTop: '0.5vh',
  },
  pageSeparator: {
    margin: theme.spacing(2, 4),
    padding: theme.spacing(2, 1),
    textAlign: 'center',
    backgroundColor: '#0086FF',
    color: 'white',
  },
  textContainer: {
    margin: theme.spacing(0, 4),
    padding: theme.spacing(4, 4),
    backgroundColor: '#80C3FF',
  },
  text: {
    backgroundColor: '#80C3FF',
  },
}));

export default useStyles;
