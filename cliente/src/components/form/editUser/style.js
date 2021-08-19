import { makeStyles } from '@material-ui/core';

/** Styles for EditUserComponent
 * @function useStyles
 * @example
 * import useStyles from './style.js'
 * const classes = useStyles();
 */

const useStyles = makeStyles((theme) => ({
  form: {
    width: '100%',
    marginBottom: theme.spacing(6),
    paddingTop: '2rem',
    display: 'flex',
    flexDirection: 'column',
  },
  formControl: {
    alignSelf: 'center',
    width: '100%',
    paddingBottom: theme.spacing(2),
  },
  buttonContainer: {
    display: 'flex',
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  button: {
    width: '1rem',
    marginTop: '1rem',
  },
  alert: {
    marginTop: theme.spacing(6),
    padding: theme.spacing(3),
  },
}));

export default useStyles;
