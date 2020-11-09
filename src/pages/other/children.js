import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Img from 'gatsby-image'
import {Grid, Typography } from '@material-ui/core';

import LinkCard from "../../components/linkCard";

import { makeStyles } from '@material-ui/core/styles';
import HeroBanner from '../../components/heroBanner'
import family16Icon from '../../images/png/016-family.png';
import family1Icon from '../../images/png/001-family.png';
import family2Icon from '../../images/png/002-family.png';
import family14Icon from '../../images/png/014-family.png';
import child48Icon from '../../images/png/048-child.png';
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
    title: 'CHILDREN AND COVID-19',
    description: "Here are some other evidence-based resources that you can explore",
    image: seoImage,
    imgText: 'main image description',
    linkText: 'Continue reading…',
  };

const sections = {
    name: 'CHILDREN AND COVID-19',
    group :[
      {
      intro: 'Many parents are finding it difficult speaking with their children (especially younger children) about COVID-19 without scaring or confusing them.  Here are some useful ideas about this:',
      data: [{
          title: 'PBS Kids' ,
          description: 'How to Talk to Your Kids about Coronavirus?',
          url: 'https://www.pbs.org/parents/thrive/how-to-talk-to-your-kids-about-coronavirus?',
          image: family16Icon,
        },
        {
          title: 'New York School Talk',
          description: 'Tips for Talking to Kids about Coronavirus Fears',
          url: 'http://newyorkschooltalk.org/2020/03/educator-shares-tips-for-talking-to-kids-about-coronavirus-fears/',
          image: family1Icon,
        },{
          title: 'NPR',
          description: 'What to Say to Kids When the News is Scary',
          url: 'https://www.npr.org/2019/04/24/716704917/when-the-news-is-scary-what-to-say-to-kids',
          image: family14Icon,
        }]
      },
      {
      intro: "Sometimes children ask questions about COVID-19 that are difficult for almost all parents to answer. Check this out:",
      data: [{
        title: 'Livescience',
        description: 'The Ultimate Kids\' Guide to the New Coronavirus',
        url: 'https://www.livescience.com/coronavirus-kids-guide.html?fbclid=IwAR24O9h2w7aYU_p5syk2cXRx8u5YZOA7r3A6XF0LvT3CfAD4_IMkeX3MbQ8',
        image: child48Icon,
      }]
    },
    {
      intro: "Some children are shaken up by the changes that the COVID-19 pandemic has caused. Here are some smart ideas about how to help children cope:",
      data: [{
        title: 'National Association of School Psychologists',
        description: 'Helping Children Cope with Changes Resulting from COVID-19',
        url: 'https://www.nasponline.org/resources-and-publications/resources-and-podcasts/school-climate-safety-and-crisis/health-crisis-resources/helping-children-cope-with-changes-resulting-from-covid-19',
        image: family2Icon,
      }],
    },
  ]
  }
export default function Other({ data }) {
    const classes = useStyles();
    return (
    <Layout>
        <SEO image={seoImage} title="Children & Covid-19 | Links to other evidence-based resources that you can explore" />
        <div style={{background: 'rgba(240, 255, 247,0.75)', margin: 'auto', paddingTop: 15, paddingLeft: 15, marginBottom: 20}} >
        <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
          <Link style={{textDecoration: 'none', color: '#DB0071'}} color="inherit" to="/other">
            Other resources
          </Link>
          <Typography color="textPrimary">Children & Covid-19</Typography>
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
                  {section.data.map((moreData) => (
                      <LinkCard cardData={moreData}></LinkCard>
                  ))}
                </Grid>
            ))}
          </div>
    </Layout>
  )
    }