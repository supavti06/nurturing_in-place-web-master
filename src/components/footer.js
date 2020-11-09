import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import logoimage from '../images/nurturinginplacelogo.png';

function Copyright() {
  return (
    <Typography variant="body2" align="center">
      {'Copyright © '}
      <Link color="inherit" href="/">
        NurturingInPlace
      </Link>
      {' '}
      {new Date().getFullYear()}, Built by
          {` `}
          <Link style={{color: '#fcb900', background: 'black', padding: 5}} href="https://brightdolphins.com">Brightdolphins.com</Link>
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: 'rgba(226, 254, 244, 1)',
    padding: theme.spacing(3),
  },
  image: {
      margin: 'auto',
  },
}));

export default function Footer(props) {
  const classes = useStyles();
  const { description, title, menu } = props;

  return (
    <footer className={classes.footer}>
      <div style={{
         height: 150,
         width: '100%',
         display: 'flex',
         justifyContent: 'center',
         alignItems: 'center',
      }}>
      <Link style={{margin:'auto'}} className={classes.image} align="center"
          href="/">
          <img style={{height: 50}} src={logoimage} alt="nurturing in place footer logo"></img>
        </Link>
      </div>
        <Grid container justify="center" spacing={3} xs={12} md={12} style={{marginBottom: "20px"}}>
          {menu.map(option => (
              <Grid item>
                { option.child ?
                  <Link variant="body1" href={option.child[0].url}>{option.title}</Link>
                  :
                  <Link variant="body1" href={option.url}>{option.title}</Link>
                }
              </Grid>
            ))}
        </Grid>
        <Copyright />
        <Grid container justify="center">
          <Link variant="body1" href='/terms' target="_blank" >Terms of Service</Link>
        </Grid>
    </footer>
  );
}

Footer.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string,
};
