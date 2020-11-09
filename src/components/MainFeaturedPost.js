import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({
  mainFeaturedPost: {
    position: 'relative',
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    zIndex: 10

  },
  image: {
    width: '100%',
    height: "auto"

  },
  imageContainer: {
    width: '100%',
    height: "auto",
    maxWidth: '100%',
    maxHeight: '100%',
    position: 'absolute',
    overflow: "hidden"
  },
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    background: 'linear-gradient(90deg, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.55) 67%, rgba(255,255,255,0.1) 100%)',

  },
  mainFeaturedPostContent: {
    position: 'relative',
    padding: theme.spacing(3),
    zIndex: 10,
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(6),
      paddingRight: 0,
    },
  },
  continueLink: {
    // color: "rgb(30,60,250)"
  }
}));

export default function MainFeaturedPost(props) {
  const classes = useStyles();
  const { post } = props;

  return (
    // <Paper className={classes.mainFeaturedPost} style={{ backgroundImage: `url(${post.image})` }}>
    <Paper className={classes.mainFeaturedPost}>
      {/* Increase the priority of the hero background image */}
      <Grid className={classes.imageContainer} item xs={12} md  ={12}>
        <img
          className={classes.image}
          src={post.image}
          alt={post.image}
        />
      </Grid>
      <div className={classes.overlay} />
      <Grid container>
        <Grid item md={6}>
          <div className={classes.mainFeaturedPostContent}>
            <Typography component="h1" variant="h3" color="inherit" gutterBottom>
              {post.title}
            </Typography>
            <Typography variant="h5" color="inherit" paragraph>
              {post.subheading}
            </Typography>
            <Typography variant="h5" paragraph>
              <Link className={classes.continueLink} href={`/${post.id}`}>
              Continue Reading
            </Link>
            </Typography>
          </div>
        </Grid>
      </Grid>
    </Paper>
  );
}

MainFeaturedPost.propTypes = {
  post: PropTypes.object,
};
