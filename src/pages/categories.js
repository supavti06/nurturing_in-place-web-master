import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/layout'
import SEO from "../components/seo"

import { sidebar } from './index'
import { makeStyles } from '@material-ui/core/styles';
import Sidebar from '../components/sidebar'
import Grid from '@material-ui/core/Grid';
import Chip from '@material-ui/core/Chip';
import Link from '@material-ui/core/Link';

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
}));


export default function  Categories({ data }) {
  const classes = useStyles();
  return(
    <Layout>
        <SEO title="Categories | Find content based on the category." />

      <Grid container spacing={5} className={classes.mainGrid}>
        <Grid item xs={12} md={8}>
          <h1>Categories</h1>
        </Grid>
      </Grid>
    </Layout>
  )
}