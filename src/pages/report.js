import React from "react"
import { Link, graphql } from 'gatsby'
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from 'gatsby-image'
import Grid from '@material-ui/core/Grid';
import HeroBanner from '../components/heroBanner'
import TwitterIcon from '@material-ui/icons/Twitter';
import Main from '../components/main';
import { makeStyles } from '@material-ui/core/styles';
import seoImage from '../images/familycomp.jpg';

const useStyles = makeStyles(theme => ({
  root: {
  //   flexGrow: 1,
  },
  side: {
      height: '50%',
      backgroundColor: 'blue',

  },
  hightlights: {
  },
  storiesClass: {
      // marginTop: "20px"
  },
  p:{
    padding: 20
  }
}));
const nurturingHeroPage = {
  title: 'Reports From The Home Front',
  description: "Join our community forum where members can discuss what’s worked and what hasn’t and hear from our team of experts",
  image: seoImage,
  imgText: 'main image description',
  linkText: 'Continue reading…',
};

export default function Report({ data }) {
  const classes = useStyles();
  return (
  <Layout>
            <SEO image={seoImage} title="Reports From The Home Front | Join our community forum where members can discuss what’s worked" />

          <HeroBanner post={nurturingHeroPage} />
          <Grid container spacing={5} className={classes.mainGrid}>
            <p className={classes.p}>
            </p>
          </Grid>
  </Layout>
)
  }


