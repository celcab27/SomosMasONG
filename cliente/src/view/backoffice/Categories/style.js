import { makeStyles } from '@material-ui/core';
/** Styles for Activities view in backoffice
 * @function useStyles
 * @example
 * import useStyles from './style.js'
 * const classes = useStyles();
 */
const useStyles = makeStyles((theme) => {
  return {
    button: {
      margin: theme.spacing(1),
    },
    right: {
      textAlign: 'end',
    },
  };
});

export default useStyles;