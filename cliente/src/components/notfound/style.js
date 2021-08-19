import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(5),
    backgroundColor: '#ccc',
  },
  image: {
    width: '70%',
    minWidth: '220px',
    maxWidth: '650px',
  },
}));

export default useStyles;
