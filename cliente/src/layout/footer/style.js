import { makeStyles, createMuiTheme } from '@material-ui/core';
/**
 * Component styles
 */
const theme = createMuiTheme();
const useStyles = makeStyles({
  footer: {
    backgroundColor: '#0086FF',
    flexGrow: '1',
    color: 'black',
    padding: '0.8rem',
    display: 'flex',
    justifyContent: 'center',
  },
  footerSocialLink: {
    margin: theme.spacing(0.2, 0),
    color: 'black',
    textTransform: 'capitalize',
  },
  listTitle: {
    margin: theme.spacing(0.2, 0),
  },
  copyright: {
    margin: theme.spacing(3, 0),
  },
  marginAuto: {
    margin: 'auto',
  },
  maxWidth: {
    maxWidth: '1280px',
  },
});

export default useStyles;
