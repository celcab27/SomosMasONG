import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => {
  return {
    container: {
      width: '90%',
      backgroundColor: 'white',
      padding: theme.spacing(4, 0),
      minHeight: '80vh',
    },
    newsContainer: {
      padding: theme.spacing(1, 4),
    },
    pageTitle: {
      margin: theme.spacing(4, 0, 1, 0),
    },
    root: {
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      backgroundColor: '#80C3FF',
    },
  };
});

export default useStyles;
