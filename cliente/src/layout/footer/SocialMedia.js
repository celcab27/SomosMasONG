/** @module Footer */
import { Grid, Link, Typography, List, ListItem } from '@material-ui/core';
import useStyles from './style';
/**
 * @function SocialMedia
 * @example
 * import SocialMedia from "layout/footer/SocialMedia";
 *
 * <SocialMedia />
 */
const SocialMedia = ({linkedin, instagram, facebook}) => {
  // object with styles options
  const classes = useStyles();
  return (
    <Grid item xs={6} sm={4}>
      <Grid container justify='space-around' align='flex-start'>
        <List>
          <ListItem>
            <Typography variant='h6' className={classes.listTitle}>
              Nuestras redes
            </Typography>
          </ListItem>
            <ListItem >
              <Link
                target='_blank'
                rel='noreferrer'
                href={facebook}
                className={classes.footerSocialLink}
              >
                Facebook
              </Link>
            </ListItem>
            <ListItem >
              <Link
                target='_blank'
                rel='noreferrer'
                href={instagram}
                className={classes.footerSocialLink}
              >
                Instagram
              </Link>
            </ListItem>
            <ListItem >
              <Link
                target='_blank'
                rel='noreferrer'
                href={linkedin}
                className={classes.footerSocialLink}
              >
                Linkedin
              </Link>
            </ListItem>
          
        </List>
      </Grid>
    </Grid>
  );
};

export default SocialMedia;
