import { makeStyles } from '@material-ui/core';
// Styles for this component
const useStyles = makeStyles((theme) => ({
  slider: {
    backgroundColor: 'black',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    margin: '0',
    padding: '0',
    overflow: 'hidden',
    height: '60vh',
  },
  sliderImage: {
    //Class added to a image hidden
    position: 'absolute',
    left: '0',
    width: '100%',
    opacity: '0',
    transition: 'opacity 0.5s',
    [theme.breakpoints.down('sm')]: {
      height: '100%',
      objectFit: 'cover',
    },
  },
  sliderImageActive: {
    //Class added to a image showed
    transition: 'opacity 1s',
    opacity: '1',
  },
  icon: {
    width: '2rem',
    height: '2rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: '50%',
    bottom: '50%',
    backgroundColor: 'rgba(230,230,230, 0.5)',
    borderRadius: '50%',
    margin: 'auto',
  },
  next: {
    right: '1rem',
  },
  previous: {
    left: '1rem',
  },
  radioContainer: {
    position: 'absolute',
    bottom: 0,
  },
  radioButton: {
    color: 'rgba(230,230,230, 0.5)',
  },
}));

export default useStyles;
