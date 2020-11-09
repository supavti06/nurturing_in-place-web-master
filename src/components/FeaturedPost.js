import Link from '@material-ui/core/Link';
import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Hidden from '@material-ui/core/Hidden';

const useStyles = makeStyles({
  card: {
    display: 'flex',
    background: 'rgba(240, 255, 247,0.75)',
    boxShadow: 'none',
    borderLeft: '3px solid #80ffbd'
    // boxShadow: ' 0px 0px 64px -32px rgba(120, 255, 215, 1);'
  },
  cardDetails: {
    flex: 1,
  },
  cardMedia: {
    width: 160,
  },
});

export default function FeaturedPost(props) {
  const classes = useStyles();
  const { post } = props;
  return (
    <Grid item xs={12} md={6}>
      <CardActionArea component="a" href={`/${post.id}`} >
        <Card className={classes.card} elevation={1} square>
          <div className={classes.cardDetails}>
            <CardContent>
              <Typography component="h2" variant="h5">
                {post.title}
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                {post.date}
              </Typography>
              <Typography variant="subtitle1" paragraph>
                {post.subheading}
              </Typography>
              <Link href={`/${post.id}`}>
              <Typography variant="body1" paragraph>
                Continue Reading...
              </Typography>

              </Link>
            </CardContent>
          </div>
          <Hidden xsDown>
            <CardMedia className={classes.cardMedia} image={post.image} title={post.imageTitle} />
          </Hidden>
        </Card>
      </CardActionArea>
    </Grid>
  );
}

FeaturedPost.propTypes = {
  post: PropTypes.object,
};
