import { Grid, Container, Typography } from '@material-ui/core';
import HomeEditForm from './../../components/homeEditionForm/HomeEditionForm';
import useStyles from './style';

const HomeForm = () => {
    const classes = useStyles();
    return ( 
        <Container maxWidth='lg'>
            <Grid container justify='center'>

                <Grid item md={8} xs={12}>
                    <HomeEditForm />
                </Grid>

            </Grid>
        </Container>
     );
}
 
export default HomeForm;