import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => {
  return {
    new: {
      textAlign: 'center',
      margin: theme.spacing(2),
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
      marginTop: '1vh',
    },
  };
});

export default useStyles;
