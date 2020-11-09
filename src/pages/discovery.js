import React from "react"
import { Link, graphql } from 'gatsby'
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from 'gatsby-image'
import Grid from '@material-ui/core/Grid';
import MainFeaturedPost from '../components/mainFeaturedPost'
import FeaturedPost from '../components/featuredPost'
import Sidebar from '../components/sidebar'
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import Main from '../components/main';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import { Box,Button, Typography } from "@material-ui/core"

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
    banner: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    borderRadius: '5px',
  },
}));
// const mainFeaturedPost = {
//   title: 'Featured blog post of the Week',
//   description:
//     "Information about the blog",
//   image: 'https://source.unsplash.com/random',
//   imgText: 'main image description',
//   linkText: 'Continue reading…',
// };

// const featuredPosts = [
//   {
//     title: 'Featured post',
//     date: 'Nov 12',
//     description:
//       'This is a wider card with supporting text below as a natural lead-in to additional content.',
//     image: 'https://source.unsplash.com/random',
//     imageText: 'Image Text',
//   },
//   {
//     title: 'Post title',
//     date: 'Nov 11',
//     description:
//       'This is a wider card with supporting text below as a natural lead-in to additional content.',
//     image: 'https://source.unsplash.com/random',
//     imageText: 'Image Text',
//   },
// ];
const posts = ["post1", "post2", "post3"];


export const sidebar = {
  title: 'About',
  description:
    'Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.',
  archives: [
    { title: 'March 2020', url: '#' },
    { title: 'February 2020', url: '#' },
    { title: 'January 2020', url: '#' },
    { title: 'November 1999', url: '#' },
    { title: 'October 1999', url: '#' },
    { title: 'September 1999', url: '#' },
    { title: 'August 1999', url: '#' },
    { title: 'July 1999', url: '#' },
    { title: 'June 1999', url: '#' },
    { title: 'May 1999', url: '#' },
    { title: 'April 1999', url: '#' },
  ],
  social: [
    { name: 'Facebook', icon: FacebookIcon , url: 'https://www.facebook.com/Nurturing-In-Place-101036928259553'},
  ],
};

export var mainPost = null
export var featuredPosts = []

function filterData(data){
  data.forEach(element => {
    if(element.mainFeaturedPost){
      mainPost = element
    }
    else if(element.featuredPost){
      featuredPosts.push(element)
    }
  });
  return [mainPost, featuredPosts]
}
export default class DiscoveryPage extends React.Component{
  state = {
    loading: true,
    blogs: [],
    mainpost: [],
    featuredPosts: []
  }
  constructor(props){
    super(props)
  }

  componentWillMount() {
    axios.get(`https://nurturinginplace.net:3000/blog`)
      .then(res => {
        let temp = filterData(res.data.data)
        this.setState({
          blogs: res.data,
          loading: false,
          mainPost: temp[0],
          featuredPosts: temp[1]
         });
      })
  }
  // const mainPost = temp[0]
  // const featuredPosts = temp[1]
render(){
  return (
    <Layout>
        <SEO title="Discovery | Browser through our selection of high quality parenting content." />

    <Box

        width='100%'
        minHeight={200}
        paddingBottom={5}
        paddingTop={5}
        marginBottom={2}
        alignItems='center'
        justifyContent= 'center'
        textAlign= 'center'
        flexDirection='column'
        style={{background: 'rgba(120, 255, 215, 0.2)'}}
      >
          <Box padding={2}>
            <h1 >Helping Families Stay Happy & Healthy</h1>
            </Box>
          <Box mt={2}>
            <Button href="about" size="large" style={{background: '#DB0071', color: 'white'}}>Learn More</Button>
            </Box>
      </Box>
        {!this.state.loading && <MainFeaturedPost post={this.state.mainPost} />}
        {!this.state.loading &&<Grid container spacing={4}>
            <FeaturedPost key={1} post={this.state.featuredPosts[0]} />
            <FeaturedPost key={2} post={this.state.featuredPosts[1]} />
          </Grid>}
          <Grid container spacing={5}>
          {!this.state.loading && <Main title="Recent Uploads" data={this.state.blogs.data}/>}
        <Sidebar
              title={sidebar.title}
              description={sidebar.description}
              social={sidebar.social}
              suggestedContent={[]}
              archives={sidebar.archives}
              />
          </Grid>
  </Layout>
  )
}
}
