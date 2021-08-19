import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  offset: {
    position: 'sticky',
  },
  logo: {
    width: '5rem',
  },
  root: {
    flexGrow: 1,
  },
  split: {
    marginRight: '10px',
  },
  align: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  iconButtonContainer: {
    color: 'white',
  },
  menuIconToggle: {
    fontSize: '3rem',
  },
  container: {
    justifyContent: 'end',
    flexWrap: 'no-wrap',
  },

  noMinWidth: {
    minWidth: '0',
  },
  drawer: {
    width: '100%',
    alignSelf: 'flex-end',
  },
  spaced: {
    justifyContent: 'space-between',
  },
  backofficeButton: {
    border: '1px solid transparent',
    transition: '0.2s ease-out',
    '&:hover': {
      border: '1px solid #0006FF',
      backgroundColor: '#0086FF',
      color: 'black',
    },
  },
  logoutButton: {
    border: 'solid 1px transparent',
    transition: '0.2s ease-out',
    '&:hover': {
      border: '1px solid #0006FF',
    },
  },
}));

export default useStyles;
