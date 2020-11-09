import { withStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import BlogCard from '../components/blogCard';
import Sidebar from '../components/sidebar'
import FeaturedPost from '../components/featuredPost'
import axios from 'axios';
import React from "react"
import { graphql } from 'gatsby'
import Layout from "../components/layout"
import SEO from "../components/seo"
import Grid from '@material-ui/core/Grid';
import HeroBanner from '../components/heroBanner'
import Main from '../components/main';
import { makeStyles } from '@material-ui/core/styles';
var seoImage = 'https://nurture-images.s3-us-west-2.amazonaws.com/takingcare5.jpg'
const styles = theme => ({
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
  },
  row: {
    paddingTop: 0,
    minHeight: 190
  }
});
const nurturingHeroPage = {
  title: 'Taking Care Of Yourself',
  description: "If you want to cope with these challenging times, you need to take care of yourself. Get specific suggestions on how you can help yourself",
  image: seoImage,
  imgText: 'main image description',
  linkText: 'Continue reading…',
  // altText: 'woman mediating'
};

export var featuredPosts = []
function filterData(data){
  data.forEach(element => {
    if(element.mainFeaturedPost){
      // mainPost = element
    }
    else if(element.featuredPost){
      featuredPosts.push(element)
    }
  });
  return featuredPosts
}
class TakingCare extends React.Component {
  state = {
    loading: true,
    blogs: [],
    firstHalf: [],
    secondHalf: []
  }
  componentWillMount() {
    axios.get(`https://nurturinginplace.net:3000/blog`)
      .then(res => {
        var firstHalf = []
        var secondHalf = []
        console.log(res.data)
        for(var i = 0; i < res.data.data.length; i ++){
          if(i <= res.data.data.length / 2){
            firstHalf.push(res.data.data[i])
          }
          else{
            secondHalf.push(res.data.data[i])
          }
        }
        this.setState({
            loading: false,
            firstHalf: firstHalf,
            secondHalf: secondHalf
          });
        })
      }
  render(){
    const { classes } = this.props;
    return (
      <Layout>
        <SEO image={seoImage} title="Taking Care Of Yourself | Every one struggles, the first step is taking care of yourself" />
      <HeroBanner post={nurturingHeroPage} />
      <Grid container alignItems='center' spacing={1} direction='row'>
          {!this.state.loading && this.state.firstHalf.map(document => (
          <Grid className={classes.row} item xs={12} md={6}>
            <BlogCard pathPrefix="/takingcare/" key={document.id} node={document} path=""></BlogCard>
          </Grid>
          ))
          }
          {!this.state.loading && this.state.secondHalf.map(document => (
          <Grid className={classes.row} item xs={12} md={6}>
            <BlogCard pathPrefix="/takingcare/" key={document.id} node={document} path=""></BlogCard>
          </Grid>
          ))
          }
      </Grid>
    </Layout>
    )
}
}
export default withStyles(styles)(TakingCare);
