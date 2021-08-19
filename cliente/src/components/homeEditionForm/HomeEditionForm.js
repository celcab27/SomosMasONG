import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Button, Grid, FormControl, TextField } from '@material-ui/core';
import { useFormik } from 'formik';
import { validation } from './validation';
import submit from './submit';
import useStyles from './style';

const HomeEditForm = ({ changeSubmit = submit }) => {
    const [errorReturnForm, setErrorReturnForm] = useState(false);
    const history = useHistory();
    const dispatch = useDispatch();
    const classes = useStyles();
    const formik = useFormik({
        initialValues: {
          welcomeMessage: '',
          sliderImage: '',
          sliderText: '',
        },
        validate: validation,
        onSubmit: (values, { setSubmitting }) => {
          setErrorReturnForm(false);
          changeSubmit(values, setSubmitting, dispatch, setErrorReturnForm, history.push);
          console.log(values);
        },
      });
    return (        
        <Grid>
            <form className={classes.root}>
              <Grid item xs={12} lg={6} className={classes.grid}>
                  <FormControl >
                      <TextField
                          id='welcomeMessage' 
                          variant='outlined'
                          type='text' 
                          name='welcomeMessage' 
                          label='Mensaje de bienvenida'
                          value={formik.values.welcomeMessage}
                          onChange={formik.handleChange}
                          aria-describedby='messageHelper'
                          error={formik.touched.welcomeMessage && 
                          Boolean(formik.errors.welcomeMessage)}
                          helperText= {formik.touched.welcomeMessage && formik.errors.welcomeMessage}/>
                  </FormControl>
                </Grid>

                <Grid item xs={12} lg={4} className={classes.grid}>
                  <FormControl>
                      <TextField
                          id='sliderImage'
                          variant='outlined'
                          type='file' 
                          label='Cargar imagen'
                          name='sliderImage' 
                          value={formik.values.sliderImage}
                          onChange={(e)=>{
                              formik.setFieldValue('sliderImage', e.target.files[0])
                            }} 
                          aria-describedby='sliderImage'
                          error={formik.touched.sliderImage && 
                          Boolean(formik.errors.sliderImage)}/>
                  </FormControl>
                </Grid>

                <Grid item xs={12} lg={6} className={classes.grid}>
                  <FormControl>
                      <TextField 
                          id='sliderText' 
                          variant='outlined'
                          type='text' 
                          label='Texto que acompaña la imagen'
                          name='sliderText'
                          value={formik.values.sliderText} 
                          onChange={formik.handleChange} 
                          aria-describedby='sliderText'
                          error={formik.touched.sliderText && 
                          Boolean(formik.errors.sliderText)}
                          helperText= {formik.touched.sliderText && formik.errors.sliderText}/>
                  </FormControl>
                </Grid>

                <Button type='submit' disabled={formik.isSubmitting} >Subir</Button>
            </form>
        </Grid>

     )
}

export default HomeEditForm;
    
