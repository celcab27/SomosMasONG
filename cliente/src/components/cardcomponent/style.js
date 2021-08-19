import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => {
  return {
    container: {
      padding: theme.spacing(4, 3),
      textAlign: 'center',
      margin: theme.spacing(2),
      minHeight: '40vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    card: {
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      textAlign: 'center',
      alignItems: 'center',
    },
    media: {
      width: '100%',
      objectFit: 'contain',
      objectPosition: 'center',
    },
    content: {
      backgroundColor: '#0086FF',
      width: '100%',
    },
    text: {
      margin: theme.spacing(1, 1),
    },
    button: {
      margin: theme.spacing(1),
    },
  };
});

export default useStyles;
