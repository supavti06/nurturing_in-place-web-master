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
import album5Icon from '../../images/png/005-album.png';
import treehouse36Icon from '../../images/png/036-tree house.png';
import pet37Icon from '../../images/png/037-pet.png';
import aquarium17Icon from '../../images/png/017-aquarium.png';

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
    title: 'Schooling Children at Home',
    description: "",
    image: seoImage,
    imgText: 'main image description',
    linkText: 'Continue reading…',
  };

const sections = {

  name: 'Schooling Children at Home',
  group: [{
    intro: 'Digital learning content for preschool through high school',
    data :[{
      title: 'Discovery K12' ,
      description: '',
      url: 'https://www.curriki.org/',
      image: family18Icon,
  },{
    title: 'Khan Academy' ,
    description: '',
    url: 'https://www.khanacademy.org/',
    image: family41Icon,
  },{
    title: 'Read Works' ,
    description: '',
    url: 'https://www.readworks.org/',
    image: car4Icon,
  },
  {
    title: 'Wonderopolis' ,
    description: '',
    url: 'https://wonderopolis.org/',
    image: family28Icon,
  }]
  },{
    intro: 'Fun for kids',
    data :[{
      title: 'Cultures and countries of the world' ,
        description: '',
        url: 'https://www.countryreports.org/',
        image: swing38Icon,
    },
    {
      title: 'National Geographic for kids' ,
        description: '',
        url: 'https://kids.nationalgeographic.com/',
        image: pet37Icon,
    },
    {
      title: 'PBS games and videos' ,
        description: '',
        url: 'https://pbskids.org',
        image: treehouse36Icon,
    },
    {
      title: 'National Gallery of Art for Kids' ,
        description: '',
        url: 'https://www.nga.gov/education/kids.html',
        image: album5Icon,
    },
    {
      title: 'Climate for Kids' ,
        description: '',
        url: 'https://climatekids.nasa.gov/',
        image: aquarium17Icon,
    },
    {
      title: 'San Diego Zoo for Kids' ,
        description: '',
        url: 'https://kids.sandiegozoo.org/',
        image: car4Icon,
    }
  ]
  }]
}
export default function Homeschooling({ data }) {
    const classes = useStyles();
    return (
    <Layout>
        <SEO image={seoImage} title=">Schooling Children at Home | Resources to help homeschool your children." />
        <div style={{background: 'rgba(240, 255, 247,0.75)', margin: 'auto', paddingTop: 15, paddingLeft: 15, marginBottom: 20}} >
          <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
            <Link style={{textDecoration: 'none', color: '#DB0071'}} color="inherit" to="/other">
              Other resources
            </Link>
            <Typography color="textPrimary">Schooling Children at Home</Typography>
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