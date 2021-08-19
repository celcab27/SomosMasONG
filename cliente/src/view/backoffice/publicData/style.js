import { makeStyles } from '@material-ui/core';
/** Styles for PublicData view in backoffice
 * @function useStyles
 * @example
 * import useStyles from './style.js'
 * const classes = useStyles();
 */
const useStyles = makeStyles((theme) => {
  return {
    title: {
      margin: theme.spacing(5, 0),
    },
    root: {
      display: 'flex',
      marginTop: theme.spacing.unit * 3,
      overflowX: 'hide',
    },
    table: {
      minWidth: 300,
    },
    tableCell: {
      paddingRight: 4,
      paddingLeft: 5
    }
  };
});

export default useStyles;
