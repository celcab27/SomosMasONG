import { makeStyles } from '@material-ui/core';

/** Styles for editActivityForm
 * @function useStyles
 * @example
 * import useStyles from './style.js'
 * const classes = useStyles();
 */

const useStyles = makeStyles((theme) => ({
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '0',
    backgroundColor: 'white',
  },
  formControl: {
    margin: theme.spacing(2),
    width: '100%',
  },
  button: {
    margin: theme.spacing(1),
  },
  alert: {
    margin: theme.spacing(2),
  },
}));

export default useStyles;
