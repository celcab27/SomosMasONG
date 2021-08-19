/** @module Footer */
import useFetch from 'hooks/useFetch';
import { Grid, Link, Typography, List, ListItem } from '@material-ui/core';
import useStyles from './style';
import { ENDPOINT_ORGANIZATION } from 'services/settings';
import SocialMedia from './SocialMedia';
import LogoImage from 'images/assets/logosomos.png';
/**
 * @function Footer
 * @example
 * import Footer from "layout/footer/Footer";
 *
 * <Footer />
 * @returns a footer component layout
 */
export default function Footer() {
  // object with styles options
  const classes = useStyles();
  const { response } = useFetch(ENDPOINT_ORGANIZATION);
  let facebook,
    instagram,
    linkedin = '';
  const footerWebLinks = ['Noticias', 'Testimonios', 'Contacto'];
  if (response) {
    facebook = response.publicData.facebook;
    instagram = response.publicData.instagram;
    linkedin = response.publicData.linkedin;
  }
  //socialMediaName link
  return (
    <footer className={classes.footer}>
      <Grid container className={classes.maxWidth}>
        {/* Logo en el footer. */}
        <Grid item xs={12} sm={4} className={classes.marginAuto}>
          <Grid container justify='center' alignItems='center' align='center'>
            {response ? (
              <img src={LogoImage} alt='ONG Logo in footer' width='120px' />
            ) : (
              <Typography> Cargando Imagen... </Typography>
            )}
            {response ? (
              <Typography variant='h5'>{response.publicData.name}</Typography>
            ) : null}
          </Grid>
        </Grid>

        <Grid item sm={4} xs={6}>
          <Grid container justify='space-around' align='flex-start'>
            <List>
              <ListItem>
                <Typography variant='h6' className={classes.listTitle}>
                  Enlaces
                </Typography>
              </ListItem>
              {footerWebLinks.map((item, i) => (
                <ListItem key={i}>
                  <Link className={classes.footerSocialLink} href={`#${item}`}>
                    {item}
                  </Link>
                </ListItem>
              ))}
            </List>
          </Grid>
        </Grid>

        {response ? (
          <SocialMedia
            facebook={facebook}
            linkedin={linkedin}
            instagram={instagram}
          />
        ) : (
          <Typography> Cargando Social Media... </Typography>
        )}

        <Grid item xs={12} className={classes.maxWidth}>
          <Grid container justify='center' alignItems='center'>
            <Typography
              variant='body2'
              align='center'
              className={classes.copyright}
            >
              {'Copyright © '}
              <Link
                color='inherit'
                href='https://bitbucket.org/alkemy-dev/t42-project-client/src/master/'
              >
                Team 42 - ONG Proyect
              </Link>{' '}
              {new Date().getFullYear()}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </footer>
  );
}
