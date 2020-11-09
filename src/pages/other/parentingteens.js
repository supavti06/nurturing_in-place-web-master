import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Img from 'gatsby-image'
import {Grid,Paper, Typography, ButtonBase} from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';
import HeroBanner from '../../components/heroBanner'
import LinkCard from "../../components/linkCard";

import family21Icon from '../../images/png/021-family.png';
import family34Icon from '../../images/png/034-family.png';
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
    title: 'Parenting Teens',
    description: "Here are some other evidence-based resources that you can explore",
    image: seoImage,
    imgText: 'main image description',
    linkText: 'Continue reading…',
  };

const sections = {
  name: 'Parenting Teens',
  group: [{
    intro: 'Parents of teens—looking for ways to help them get along better?  Here are parenting programs you can do at home on a computer:',
    data :[{
        title: 'Triple P Online' ,
        description: 'Teen Triple P Online (for families with youth ages 10-16)',
        url: 'https://www.triplep-parenting.com/us/get-started/online-parenting-course-pre-teens-and-teens/',
        image: family21Icon ,
    },
    {
    title: 'Parenting Wisely, Teen Edition' ,
    description: 'Available in English and Spanish',
    url: 'https://teen.parentingwisely.com/',
    image: family34Icon,
    }
  ]
  }]
}
export default function Other({ data }) {
    const classes = useStyles();
    return (
    <Layout>
      <SEO image={seoImage} title="Parenting Teens | Great resources to help parenting teenagers." />
      <div style={{background: 'rgba(240, 255, 247,0.75)', margin: 'auto', paddingTop: 15, paddingLeft: 15, marginBottom: 20}} >
          <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
            <Link style={{textDecoration: 'none', color: '#DB0071'}} color="inherit" to="/other">
              Other resources
            </Link>
            <Typography color="textPrimary">Parenting Teens</Typography>
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