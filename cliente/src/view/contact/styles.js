import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  text: {
    textAlign: 'center',
  },
  container: {
    minHeight: '90vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

export default useStyles;
