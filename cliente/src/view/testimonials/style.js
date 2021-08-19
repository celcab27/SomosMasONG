import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => {
  return {
    grid: {
      textAlign: 'center',
      margin: theme.spacing(6),
    },
    cardImage: {
      height: '15rem',
      objectFit: 'contain',
      objectPosition: 'center',
    },
    cardContent: {
      backgroundColor: '#0086FF',
    },
    button: {
      marginTop: '2vh',
      marginBottom: '2vh',
    },
  };
});

export default useStyles;
