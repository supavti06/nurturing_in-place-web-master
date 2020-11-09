import React from "react"
import { Link, graphql } from 'gatsby'
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from 'gatsby-image'
import {Grid,Paper, Typography, ButtonBase} from '@material-ui/core';
import StyledButton from "../components/styledButton"
import HeroBanner from '../components/heroBanner'
import { makeStyles } from '@material-ui/core/styles';
// import other from '../images/family2comp.jpg';
import familyIcon from '../images/png/016-family.png';
var seoImage = 'https://nurture-images.s3-us-west-2.amazonaws.com/family2compressed2.jpg';

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
  linksClass: {
      padding:"20px"
  },
  p:{
    padding: 20
  },
  linksInner:{
    padding: 30,
    // height: 40,
  },
  image: {
    width: 70
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
}));
const nurturingHeroPage = {
  title: 'Useful Resources For Parents',
  description: "Here are some other evidence-based resources that you can explore",
  image: seoImage,
  imgText: 'main image description',
  linkText: 'Continue reading…',
};
export const resourcesData = [
  {

    id: 1,
    Title: "Children and Covid-19",
    Subheader: '',
    Url: '/other/children',
    // Color: '#dce35b',
    Color: 'linear-gradient(to bottom, #dce35b, #45b649)',
  },
  {
    id: 2,
    Title: "Parenting Young Children",
    Subheader: "",
    Url: '/other/parentingyoung',
    // Color: '#36d1dc',
    Color: 'linear-gradient(to bottom, #36d1dc, #5b86e5)',
  },
  {
    id: 3,
    Title: "Parenting Teens",
    Subheader: "",
    Url: '/other/parentingteens',
    // Color: '#36d1dc',
    Color: 'linear-gradient(to bottom, #eea849, #f46b45)',
  },
  {

    id: 4,
    Title: "Schooling Children at Home",
    Subheader: '',
    Url: '/other/homeschooling',
    // Color: '#dce35b',
    Color: 'linear-gradient(to bottom, #dce35b, #45b649)',
  },
]

const external = [0,1,2,3,4,5,6,7]
export default function Other({ data }) {
  const classes = useStyles();
  return (
  <Layout>
    <SEO image={seoImage} title="Parenting Resource | Useful Resources For Parents" />
      <HeroBanner post={nurturingHeroPage} />
      <div style={{paddingBottom: 80}}>
        <Grid container spacing={2} direction="row">
        {resourcesData.map((section)=>(
          <Grid item xs={12} md={6}>
            <StyledButton title="Kernels for Kids" data={section}/>
          </Grid>
        ))}
        </Grid>
        </div>

  </Layout>
)
  }

