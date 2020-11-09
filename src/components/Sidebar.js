import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { useStaticQuery, graphql } from "gatsby"
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { Chip, Typography } from '@material-ui/core';
import Link from '@material-ui/core/Link';
import BlogCard from './blogCard'
import SuggestedContent from '../components/suggestedContent'
import {kernelData} from '../pages/kernels/PAX'
import {resourcesData} from '../pages/other'
var seoImage = 'https://nurture-images.s3-us-west-2.amazonaws.com/kidscomp.jpg'
// import other from '../images/family2comp.jpg';
// var other = 'https://nurture-images.s3-us-west-2.amazonaws.com/family2compressed2.jpg';

const useStyles = makeStyles((theme) => ({
  sidebarAboutBox: {
    padding: theme.spacing(2),
    backgroundColor: theme.palette.grey[200],
  },
  sidebarSection: {
    marginTop: theme.spacing(3),
  }
}));
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;
  while (0 !== currentIndex) {

    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}
export default function Sidebar(props) {
  const classes = useStyles();
  const { description, social, title, suggestedContent } = props;
  if(suggestedContent.length > 1){
    var randomize = shuffle(suggestedContent)
    var content = []

    for(var i = 0; i < 2; i++){
      var selectedPost = randomize[i]
      content.push({
        id: selectedPost.id,
        image: selectedPost.image,
        title: selectedPost.title,
        subheading: selectedPost.subheading,
        url: "/"+ selectedPost.id
      })
    }
  }
  return (
    <Grid item xs={12} md={4} style={{padding: 30}}>
      <Paper elevation={0} className={classes.sidebarAboutBox}>
        <Typography variant="h6" gutterBottom>
          About
        </Typography>
        <Typography>
          Nurturing in Place is a partially grant-funded project designed to provide support to families currently navigating challenges associated with current social-distancing restrictions. The present COVID-19 crisis poses an extraordinary threat to family wellbeing, however, we believe that it also poses an unique opportunity. The goal of this website is to offer parents simple, brief strategies that increase parent self-care and promote positive, nurturing parenting practices. In doing so, we believe that we can both help families increase safety and nurturance at home, while also decreasing conflict and stress.
        </Typography>
      </Paper>
      {/* <Link style={{paddingTop:20}}display="block" variant="body1" href="/categories">Categories</Link> */}
      {/* {data.allStrapiCategory.edges.map(category => (
        <Link style={{padding:'5px 0px 5px 15px' }} display="block" variant="body1" href={`/categories/${category.node.Name}`} key={category.node.id}>
          <Chip label={category.node.Name}/>
        </Link>
      ))} */}
      <Typography variant="h6" gutterBottom className={classes.sidebarSection}>
        Social
      </Typography>
      {social && social.map((network) => (
        <Link display="block" variant="body1" href={network.url} key={network} >
          <Grid container direction="row" spacing={1}>
            <Grid item>
              <network.icon />
            </Grid>
            <Grid item>{network.name}</Grid>
          </Grid>
        </Link>
      ))}
      {content &&
        content.map(document => (
        <SuggestedContent key={document.id} node={document} url={document.id}></SuggestedContent>
        ))
      }
    </Grid>
  );
}

Sidebar.propTypes = {
  description: PropTypes.string,
  social: PropTypes.array,
  title: PropTypes.string,
};
