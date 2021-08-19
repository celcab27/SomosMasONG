import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => {
  return {
    member: {
      textAlign: 'center',
      margin: theme.spacing(2, 4, 6, 4),
    },
    cardImage: {
      width: '100%',
      height: '14rem',
      objectFit: 'contain',
      objectPosition: 'center',
    },
    cardContent: {
      backgroundColor: '#0086FF',
    },
  };
});

export default useStyles;
