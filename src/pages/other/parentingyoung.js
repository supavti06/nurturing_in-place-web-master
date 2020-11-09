import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Img from 'gatsby-image'
import {Grid,Paper, Typography, ButtonBase} from '@material-ui/core';

import LinkCard from "../../components/linkCard";

import { makeStyles } from '@material-ui/core/styles';
import HeroBanner from '../../components/heroBanner'
import family18Icon from '../../images/png/018-family.png';
import family41Icon from '../../images/png/041-family.png';
import car4Icon from '../../images/png/004-car.png';
import family28Icon from '../../images/png/028-family.png';
import swing38Icon from '../../images/png/038-swing.png';


// import other from '../../images/family2comp.jpg';
import { Link } from "gatsby";

import { Breadcrumbs } from '@material-ui/core';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
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
  p:{
    padding: 20
  },
}));

const nurturingHeroPage = {
    title: 'Parenting Young Children',
    description: "Here are some other evidence-based resources that you can explore",
    image: seoImage,
    imgText: 'main image description',
    linkText: 'Continue reading…',
  };

const sections = {
  name: 'Parenting Young Children',
  group :[
    {
      data: [{
      title: 'Triple P Online',
      description: 'Top Parenting Tips for Parents and Caregivers During COVID-19',
      url: 'https://www.triplep-parenting.net/parentsite3/files/downloads/tpi-top-tips-covid19-letter-us-en.pdf?_ga=2.229019740.1950073319.1586386015-917686603.1586386015',
      image: family28Icon,
      }]
    },
    {
      intro: 'Here is a well-designed parenting program that you can do on your own at home on a computer:',
      data: [{
        title: 'Triple P Online',
        description: 'Triple P (for families with children ages 1 to 12)',
        url: 'https://www.triplep-parenting.com/us/get-started/online-parenting-course-toddlers-to-tweens/',
        image: car4Icon,
      }]
    },
    {
      intro: 'Parents often seek out information about healthy ways to discipline young children. Here is a useful program called Play Nicely developed by a Vanderbilt University pediatrician:',
      data: [{
      title: 'Play Nicely',
      description: 'Play Nicely program (in English)',
      url: 'http://playnicely.vueinnovations.com/free/english',
      image: swing38Icon,
      },
      {
      title: 'Play Nicely',
      description: 'Play Nicely program (in Spanish)',
      url: 'http://playnicely.vueinnovations.com/free/spanish',
      image:  family18Icon,
      }]
    },
    {
      intro: 'Parenting with Preschoolers:  Guidance regarding structure, routine, and healthy habits',
      data: [{
      title: 'Harvard',
      description: 'Caring for Preschoolers at Home (Harvard Graduate School of Education)',
      url: 'https://www.gse.harvard.edu/news/uk/20/03/caring-preschoolers-home',
      image: family41Icon,
    },]
  }]
  }
export default function Other({ data }) {
    const classes = useStyles();
    return (
    <Layout>
      <SEO image={seoImage} title="Parenting Young Children | Resources to help parents guide their young children." />
      <div style={{background: 'rgba(240, 255, 247,0.75)', margin: 'auto', paddingTop: 15, paddingLeft: 15, marginBottom: 20}} >
          <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
            <Link style={{textDecoration: 'none', color: '#DB0071'}} color="inherit" to="/other">
              Other resources
            </Link>
            <Typography color="textPrimary">Parenting Young Children</Typography>
          </Breadcrumbs>
        </div>
          <HeroBanner post={nurturingHeroPage} />
              <div style={{padding: 20}}>
              {sections.group.map((section) => (                  
              <Grid container spacing={2} style={{marginTop:10}}>
                      {section.intro &&
                      <Grid item className={classes.linksClass} xs={12}>
                        <Typography style={{ borderTop : '1px solid #e8e8e8',margin: 10, padding:30 }} variant="body1" gutterBottom>
                            {section.intro}
                        </Typography>
                      </Grid>
                      }
                    {section.data.map((data) => (
                        <LinkCard cardData={data}></LinkCard>
                    ))}
                  </Grid>
              ))}


            </div>
    </Layout>
  )
    }