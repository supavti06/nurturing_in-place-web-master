// import other from '../images/family2comp.jpg';

// var seoImage = 'https://nurture-images.s3-us-west-2.amazonaws.com/kidscomp.jpg'
// import takingCare from '../images/takingcare5.jpg';
import React from "react"
import { Link, graphql } from 'gatsby'

import Grid from '@material-ui/core/Grid';
import Main from '../components/main';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import axios from 'axios';
import { Box, Container, Button, Typography } from "@material-ui/core";
import HomeCarousel from '../components/carousel';
import LayoutExpanded from '../components/layoutExpanded';
import Icon1 from '../images/png/001-family.png';
import Icon2 from '../images/png/049-advice.png';
import Icon3 from '../images/png/027-moving truck.png';
import blob1 from '../images/svg/blob-mini-1.svg';
import blob2 from '../images/svg/blob-mini-2.svg';
import arrow from '../images/svg/arrow.svg';
import family16Icon from '../images/png/016-family.png';
// import question from '../images/faq2.jpg';
import self from '../images/stock-photo-young-woman-in-medical-mask-stay-isolation-at-home-for-self-quarantine-concept-home-quarantine-1678716379.jpg';
import face from '../images/stock-vector-abstract-line-art-face-modern-contemporary-minimalist-woman-portrait-young-girl-hand-drawn-1630771948.jpg';
import './index.css'
import SEO from "../components/seo"
var other = 'https://nurture-images.s3-us-west-2.amazonaws.com/family2compressed2.jpg';
var takingCare = 'https://nurture-images.s3-us-west-2.amazonaws.com/takingcare5.jpg'
// var seoImage = 'https://nurture-images.s3-us-west-2.amazonaws.com/kidscomp.jpg'
var question = 'https://nurture-images.s3-us-west-2.amazonaws.com/faq2.jpg';
var seoImage = 'https://nurture-images.s3-us-west-2.amazonaws.com/familytogethernew2.png';
const useStyles = theme => ({
  root: {
  //   flexGrow: 1,
  },
  side: {
      height: '50%',
      backgroundColor: 'blue',

  },
  sectionContainer: {
    marginTop: theme.spacing(20),
    marginBottom: theme.spacing(20),
    backgroundColor: 'inherit'

  },
  sectionRow: {
    marginTop: theme.spacing(10),
    marginBottom: theme.spacing(10),

  },
  panel: {
    padding: theme.spacing(5),
    backgroundColor: 'white',
    boxShadow: ' 0px 0px 64px -10px rgba(120, 255, 215, 1)',
    paddingTop: theme.spacing(6),
    paddingBottom: theme.spacing(6),
    display: 'flex',
    textAlign: 'center',
    borderRadius: '30px',
    minHeight: 500
  },
  reasons: {
    padding: theme.spacing(6),
    display: 'flex',
  },
  banner: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    borderRadius: '5px',
  },
  image: {
    padding: 40,
    width: 170,
    overflow: 'visible',
    display: 'inline-block',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    // backgroundColor: 'rgba(120, 255, 215, 1)'
  },
  imgIcons: {
    // borderRadius: '30px',
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
  img: {
    borderRadius: '30px',
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },

})

const section1data = [{
  icon: Icon2,
  blob: blob1,
  title: 'Tips For You',
  description: 'If you want to cope with these challenging times, you need to take care of yourself. Get specific suggestions on how you can help yourself.',
}, {
  icon: Icon1,
  blob: blob2,

  title: 'Tips For Your Family',
  description: 'Parenting can be tough especially these days. Here are some things you can do to make sheltering in place as a family a little easier.',
}, {
  icon: Icon3,
  blob: blob1,

  title: 'Tools for Parents',
  description: 'Nurturing in place houses an abundance of information to help nurture good behavior and help parents fulfill the need of their children.',
},];

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

 class IndexPage extends React.Component{

  className
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
render(){
  const { classes } = this.props;
  return (
    <LayoutExpanded>
        <SEO image={seoImage} title="Nurturing in Place | Your guide to a happy and healthy personal life" />
        <HomeCarousel></HomeCarousel>
        {/* Sections */}
        <div style={{background: 'rgba(226, 254, 244, 1)'}}>
          <Container maxWidth="lg" style={{paddingTop: 100, paddingBottom: 100}}>
          <Grid item xs={12} >
              <Grid container item xs={12} style={{marginBottom: 60}} className={classes.banner}>
                <Grid item sm={12} >
                  <div style={{display: 'inline-block', margin: 'auto', paddingBottom:2, color: 'black',
                  borderBottom: '5px solid rgb(241, 188, 64)'
                  }}>
                  <Typography variant="h3" >
                      How can we help you?
                  </Typography>
                  </div>
                </Grid>
              </Grid>
            <Grid container spacing={2}>
              {section1data.map((data) => (
                <Grid item xs={12} sm={6} md={4}>
                  <Grid container item  className={[classes.panel]} >
                    <Grid item xs={12} >
                      <div className={classes.image} style={{
                          backgroundImage: `url(${data.blob})`,
                      }}>
                        <img src={data.icon} className={classes.imgIcons} alt={data.title} />
                      </div>
                    </Grid>
                    <Grid item xs={12} >
                      <Typography variant="h5" style={{color: '#2a613b'}}>
                        {data.title}
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography inline  variant="body1">
                        {data.description}
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              ))}

            </Grid>
          </Grid>
          </Container>
        </div>
        <div className='wavedown'>
          <img src={arrow} alt="arrow" style={{ display: 'block', margin: 'auto'}}/>
        </div>

        <div style={{background: 'white'}} >

        <Container maxWidth="lg" style={{paddingTop: 10, paddingBottom: 10}} >
        <Grid container className={classes.sectionContainer}  spacing={2}>
            <Grid item xs={12} md={7}>
              <img src={takingCare} className={classes.img} alt='woman mediating'/>
            </Grid>
            <Grid item xs={12} md={5} className={classes.sectionRow} className='bg1'>
              <Grid container item xs={12} className={classes.reasons} spacing={2}  >
                <Grid item sm={12}>
                    <Typography variant="h4">
                      Take Care Of Yourself
                      {/* https://www.shutterstock.com/image-photo/young-woman-medical-mask-stay-isolation-1678716379 */}
                    </Typography>
                  </Grid>
                  <Grid item sm={12} >
                    <Typography inline  variant="body1" >
                      If you want to cope with these challenging times, you need to take care of yourself.
                      Get specific suggestions on how you can help yourself.
                    </Typography>
                  </Grid>
                  <Grid item sm={12}>
                    <Button href="takingcare" size="large" style={{background: '#E00074', color: 'white'}}>Learn Now</Button>
                  </Grid>
                </Grid>
              </Grid>
          </Grid>
          <Grid container className={classes.sectionContainer}  spacing={2}>

            <Grid item xs={12} md={5}  className={classes.sectionRow} className='bg2'>

              <Grid container item xs={12} className={classes.reasons} spacing={2}>
                <Grid item sm={12} >
                  <Typography variant="h4">
                  Kernels For Kids
                  </Typography>
                </Grid>
                <Grid item sm={12}>
                  <Typography inline  variant="body1">
                  Simple ways of promoting good behavior. Follow our step-by-step easy to understand Kernels starting today.
                  </Typography>
                </Grid>
                <Grid item sm={12}>
                  <Button href="kernels" size="large" style={{background: '#E00074', color: 'white'}}>Learn Now</Button>
                </Grid>
              </Grid>
            </Grid>
          <Grid item xs={12} md={7}>
            <img src={question} className={classes.img} alt='kidings sitting outside'/>
          </Grid>

          </Grid>
        <Grid container className={classes.sectionContainer} spacing={2}>

              <Grid item xs={12} md={7}>
                <img src={other} className={classes.img} alt='mom holding baby while family watches'/>
              </Grid>
              <Grid item xs={12} md={5} className={classes.sectionRow} className='bg3'>
                <Grid container item xs={12} className={classes.reasons} spacing={2}>
                  <Grid item sm={12} >
                    <Typography variant="h4">
                    Useful resources for parents
                      {/* https://www.shutterstock.com/image-vector/abstract-line-art-face-modern-contemporary-1630771948 */}
                    </Typography>
                  </Grid>
                  <Grid item sm={12}>
                    <Typography inline  variant="body1">
                      Browse through our hand selected collection of external resources.
                    </Typography>
                  </Grid>
                  <Grid item sm={12}>
                    <Button href="other" size="large" style={{background: '#E00074', color: 'white'}}>Learn Now</Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
        </Container>
      </div>

      <div   className='waveup'>

      <Container maxWidth="lg" style={{paddingTop: 100, paddingBottom: 100}}>
      <Grid item sm={12}>
        <Grid container item xs={12} className={classes.banner} spacing={4}>
              <Grid item sm={12}>
              </Grid>
                <Grid item sm={12} >
                  <Typography variant="h3">
                      Helping Families Stay Happy & Healthy
                  </Typography>
                </Grid>
                <Grid item sm={12}>
                  <Button href="about" size="large" style={{background: '#5fe387'}}>Learn More</Button>
                </Grid>
              </Grid>
        </Grid>
      </Container>
      </div>

  </LayoutExpanded>
  )
}
}

export default withStyles(useStyles)(IndexPage)