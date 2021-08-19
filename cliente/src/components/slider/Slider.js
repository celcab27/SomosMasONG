/**@module Slider */
import React, { useState, useEffect } from 'react';
import { Icon, Radio, RadioGroup, Box } from '@material-ui/core';
import sliderImages from './sliderImages/sliderImages';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import useStyles from './styles/useStyles';
/**
 * Slider component to show images in home section
 * @function Slider
 * @example import Slider from 'components/slider/Slider';
 */

const Slider = () => {
  const [checked, setChecked] = useState(0);
  const length = sliderImages.length;
  useEffect(() => {
    const timer = setTimeout(() => {
      const length = sliderImages.length;
      setChecked(checked === length - 1 ? 0 : checked + 1);
    }, 6000);
    return () => clearTimeout(timer);
  }, [checked]);
  /**
   * change the active image to the next one in array list;
   * if it is the end, image displayed will be the first
   * @function nextSlide
   */
  const nextSlide = () => {
    setChecked(checked === length - 1 ? 0 : checked + 1);
  };
  /**
   * change the active image to the previous one in array list;
   * if it is the begin, image displayed will be the last
   * @function previousSlide
   */
  const previousSlide = () => {
    setChecked(checked === 0 ? length - 1 : checked - 1);
  };
  /**
   * change 'checked' state to the value in radio selected;
   * @function handleChange
   */
  const handleChange = (event) => {
    setChecked(Number(event.target.value));
  };
  //classes object
  const classes = useStyles();
  if (length === 0) {
    // If array dont have images return null
    return null;
  }
  // Slider component
  return (
    <Box className={classes.slider}>
      {sliderImages.map((img, i) => {
        return (
          <img
            src={img.imageUrl}
            className={
              i === checked
                ? `${classes.sliderImage} ${classes.sliderImageActive}`
                : classes.sliderImage
            }
            alt={img.text}
            name={i}
            key={i}
          ></img>
        );
      })}
      <Icon className={`${classes.previous} ${classes.icon}`}>
        <ArrowLeftIcon onClick={previousSlide}></ArrowLeftIcon>
      </Icon>
      <Icon className={`${classes.next} ${classes.icon}`}>
        <ArrowRightIcon onClick={nextSlide}></ArrowRightIcon>
      </Icon>
      <RadioGroup row className={classes.radioContainer}>
        {sliderImages.map((_, i) => {
          return (
            <Radio
              className={classes.radioButton}
              value={i}
              checked={checked === i}
              name='radio-button'
              onChange={handleChange}
              key={i}
              color='primary'
            ></Radio>
          );
        })}
      </RadioGroup>
    </Box>
  );
};

export default Slider;
