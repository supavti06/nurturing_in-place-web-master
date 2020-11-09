import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from 'gatsby-image'
import Grid from '@material-ui/core/Grid';
import HeroBanner from '../components/heroBanner'
import { makeStyles } from '@material-ui/core/styles';

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
  title: 'Featured blog post of the Week',
  description:
    "Information about the blog",
  image: 'https://source.unsplash.com/random',
  imgText: 'main image description',
  linkText: 'Continue reading…',
};

export default function Nurturing({ data }) { 
  const classes = useStyles();
  return (
  <Layout>
          <HeroBanner post={nurturingHeroPage} />
          <Grid container spacing={5} className={classes.mainGrid}>
            <p className={classes.p}> 
            We created this website to help parents cope with the challenges involved in “sheltering in place.”  We are a loose network of experts on family life who are trying to provide some support to families with children during these challenging times.  Here’s what you can find on this website:
            </p>
          </Grid>
  </Layout>
)
  }