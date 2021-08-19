import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => {
  return {
    item: {
      margin: theme.spacing(2, 4),
      minWidth: '20vw',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      boxShadow: '0px 15px 15px 5px rgba(0,0,0,0.4)',
      [theme.breakpoints.down('md')]: {
        minWidth: '95vw',
      },
      [theme.breakpoints.down('lg')]: {
        minWidth: '22vw',
      },
    },
    title: {
      fontSize: '1.5em',
      textAlign: 'center',
      fontWeight: 'bold',
      color: '#094b87',
    },
    media: {
      width: '100%',
      maxWidth: '50vh',
      objectFit: 'contain',
      objectPosition: 'center',
    },
  };
});

export default useStyles;
