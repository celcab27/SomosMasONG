import React from 'react';
import HashLoader from 'react-spinners/HashLoader';
import Grid from '@material-ui/core/Grid';

/**
 * @module layout/loader
/**
 * Component to show when something is loading
 * @function Loader
 * @param {string} color The color of the spinner
 * @param {integer} size The size of the spinner
 * @param {integer} speed The speed of the spinner animation
 * @example 
 *  <Loader color={#000} size={150} speed={1} />
 */
const Loader = ({ color = '#4A90E2', size = 250, speed = 1 }) => {
  return (
    <Grid
      container
      direction='column'
      justify='center'
      alignItems='center'
      style={{ minHeight: '100vh', position: 'fixed', top: 0, left: 0 }}
    >
      <HashLoader color={color} size={size} speedMultiplier={speed} />
    </Grid>
  );
};

export default Loader;
