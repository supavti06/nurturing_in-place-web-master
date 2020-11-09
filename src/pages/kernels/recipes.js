import window from 'global'
import ReactPlayer from 'react-player'
import {Box,Typography, Button,TextField,Container, Icon} from '@material-ui/core';
import axios from 'axios';
import React from "react"
import { Link, graphql } from 'gatsby'
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Img from 'gatsby-image'
import Grid from '@material-ui/core/Grid';
import HeroBanner from '../../components/heroBanner'
import { withStyles } from '@material-ui/core/styles';
import KernelLinks from "../../components/kernelLinks"
import closeButton from '../../images/png/closesymbol.png';
import "react-responsive-modal/styles.css";
import paxtools from '../../images/Pax Tools Verticle.webp';
import "./pax.css"
import video from '../../videos/Kernels4Kids.mp4';
import { Breadcrumbs } from '@material-ui/core';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
var seoImage = 'https://nurture-images.s3-us-west-2.amazonaws.com/kidscomp.jpg'

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
    p:{
      padding: 20
    },
    modal: {
      padding: 100
    },
    image: {
      width: 250,
      height: 'auto',
      margin: 10
    },
    img: {
      margin: 'auto',
      display: 'block',
      maxWidth: '100%',
      maxHeight: '100%',
    },
    closeButton: {
      position: "relative",
      marginTop: 49,
      width: 25,
      height: 25,
      [theme.breakpoints.up('sm')]: {
        float: "right",
        position: "-webkit-sticky",
        position: "sticky",
        bottom: 229,
        marginLeft: 2,
        border: "1px solid black",
        zIndex: 2,
      }
    },
    video: {
      display: "flex",
      justifyContent: "flex-end",
      position: "-webkit-sticky",
      position: "sticky",
      [theme.breakpoints.up('sm')]: {
        float: "right",
        bottom: 0,
        zIndex: 2,
      }
    },
    videoBlock: {
      height: 0,
      [theme.breakpoints.up('sm')]: {
        paddingTop: 0,
        marginTop: 0,
        height: 285,
        }
      }
});
const nurturingHeroPage = {
  title: 'Family Favorite Recipes',
  description: "Recipes help you use Kernels more effectively by arranging them in a way that you can get the results with your kids you desire",
  image: seoImage,
  imgText: 'main image description',
  linkText: 'Continue reading…',
};
export const recipeData = [
  {
    id: 1,
    Title: `Transitioning Into Chore Time`,
    Subheader: `Our little ones have always liked helping out, so this recipe isn’t for them. But if you teens, say Randall and Wanda, well that’s a different story. If these two are playing video games or watching television, you could explode a bomb in the next room and they wouldn’t budge, so forget pleading with them to do laundry or pick vegetables from the garden. Transitioning into Chore Time got much easier for us once we began baking these ingredients together:`,
    Features: [
      {
        text:`Sight Schedules: Use this simple kernel to set up a schedule for chores.  This gives you a way to begin each day with a plan for what will happen that day.  Establishing a daily routine will reduce conflict and help everyone feel like they are accomplishing things.`,
        kernelId: 14
      },
      {
        text: `Mystery Motivators. Here is a tested and effective way to motivate our kids.  Every time they get a chore done on the schedule, surprise with a mystery motivator reward.`,
        kernelId: 2
      },
    ],
    Endnote: ``,
    Url: '',
    Footer: true,
    // Color: '#dce35b',
    Color: 'linear-gradient(to bottom, #dce35b, #45b649)',
    Image: "https://nurture-images.s3-us-west-2.amazonaws.com/family2comp.jpg"
  },
  {
    id: 2,
    Title: `Getting Up in the Morning Recipe`,
    Subheader: `Keisha, our youngest, was never good at getting up, and now that there’s really nowhere to go, she puts up quite a struggle when we say it’s time to get up. We really needed a recipe for helping our lovely Keisha get the day going. This recipe involves just two kernels, though you can add more if you want.`,
    Features: [
      {
        text: `Beat the Timer. Follow the six steps found in the Kernels page of this website. Set your family up for success by adding these additional steps:
      Let everyone know that in the morning, when the alarm sounds, the timer is ticking. Ask everyone how many minutes they’d like to get up. Agree on the amount of time they’ll have and then set the timer.`,
      kernelId: 16
      }, {
        text: `Mystery Motivators. Follow the four steps found in the Kernels page of this website. Set your family up for success by adding these additional steps:
        Ask everyone the night before which of the mystery motivators they’d like to add to the mix. Who knows what the app will select???
        Add an extra mystery motivator that no one knows about but that you have good reason to believe your kids will love. Surprises can be great fun and really motivating for the next round!`,
      kernelId: 2
    }
    ],
    Endnote: ``,
    Url: '',
    Footer: true,
    // Color: '#dce35b',
    Color: 'linear-gradient(to bottom, #eea849, #f46b45)',
    Image: "https://nurture-images.s3-us-west-2.amazonaws.com/pixa.jpg"
  },
  {
    id: 3,
    Title: `Disinfect Is safety (DIS)`,
    Subheader: `In today’s world, disinfecting surfaces that we touch after having been outside is key to keeping everyone safe. It’s not easy to remember all the steps, and sometimes kids don’t want to take the time to do all of them. This recipe is gold for helping everyone continue to DIS, even when they don’t want to. `,
    Features: [{
      text: `Banning the Bad Bozos. Follow the four steps found in the Kernels page of this website. Set your family up for success by adding these additional steps:
        everyone before leaving the house, what they should do when they get home to keep themselves and others safe.
        Leave a sign at the front door or at the garage entry to the house reminding anyone entering the house to wash their hands immediately. `,
        kernelId: 9
      }, {
        text: `PAX Wanna Wanna Wanna (WWW). Follow the three steps found in the Kernels page of this website. `,
        kernelId: 10
      },
      {
        text:
        `Kudos Notes. Follow the four steps found in the Kernels page of this website. Set your family up for success by adding these additional steps:
        Let your kids know in advance that earned Kudos Notes will sometimes lead to Bonus Bucks. Kids should keep an eye out for Kudos Notes, because they’ll never know where you might put them after they’ve done something that truly delights you.
        Tape Kudo Notes to the wall near where you saw someone doing something important. Don’t forget to write exactly what your kid did that you value. `,
        kernelId: 1
      }
    ],
    Endnote: ``,
    Url: '',
    Footer: true,
    // Color: '#dce35b',
    Color: 'linear-gradient(to bottom, #36d1dc, #5b86e5)',
    Image: "https://nurture-images.s3-us-west-2.amazonaws.com/happyboy.jpg"
  },
]
class Recipes extends React.Component {
  state = {
    open: false,
    email: "",
    show: true
}

  // onOpenModal = event => {
  //   this.setState({ open: true });
  // };

  // onCloseModal = event => {
  //   this.setState({ open: false });
  // };
  // handleInputChange = event => {
  //   this.state.email = event.target.value
  // }

  closeVideo = event => {
    this.setState({show: false})
  }

  // handleSubmit = event => {
  //   event.preventDefault()
  //   if(this.state.email == ""){
  //       alert("You must enter a valid email address")
  //   }
  //   else{
  //     axios.post('https://nurturinginplace.net:3000/subscribers',
  //       {
  //           email: this.state.email
  //       })
  //       .then(res => {
  //         this.setState({ open: false });
  //         alert("You have been successfully subscribed.")
  //       })
  //   }
  // }
  // componentDidMount(){
  //   this.setState({
  //     open: true
  //   })
  // }
  render() {
    // const { open } = this.state;
    const { classes } = this.props;
    const width = window.innerWidth;

    return (
    <Layout>
      <SEO image={seoImage} title="PAX Kernels | simple activities for parents to help promote healthy and happy kids" />
      <div style={{background: 'rgba(240, 255, 247,0.75)', margin: 'auto', paddingTop: 15, paddingLeft: 15, marginBottom: 20}} >
        <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
          <Link style={{textDecoration: 'none', color: '#DB0071'}} color="inherit" to="/kernels">
            Kernels
          </Link>
          <Typography color="textPrimary">PAX</Typography>
        </Breadcrumbs>
      </div>
      <HeroBanner post={nurturingHeroPage} />
      <div>
        <Grid container spacing={5} >
          {/* <p className={classes.p}>
          </p> */}
          <Grid item xs={12}>
            <KernelLinks title="" posts={recipeData} category="recipes"/>
          </Grid>
        </Grid>
      </div>

      <Container className='svg-bg' style={{ marginTop: 50, padding: 20, minHeight: 250}}>
      <Grid container spacing={5}  justify="center" >
        <Grid item sx sm={6}>
          <Box
          display="flex"
          width='100%'
          minHeight={200}
          paddingBottom={5}
          paddingTop={5}
          marginBottom={2}
          alignItems="center"
          justifyContent="center"
          flexDirection='column'>
          <Box mb={2}>
          <Typography style={{textDecoration: 'none'}} variant='h4'>Want more??</Typography>
            </Box>
            <Box style={{borderRadius:'10px' ,  margin: 'auto', padding: '5px 20px 5px 20px',background: 'linear-gradient(45deg, #846aad 30%, #ad6a90 90%)'}}>
              <a style={{textDecoration: 'none', color: 'white'}} href="https://www.paxtools.org/pax-tools-app"  ><Typography variant="overline">Download the app</Typography></a>
            </Box>
            <Box mt={2}>
              <a style={{margin: 'auto',color: 'purple'}} href="../../pdf/Pax Tools User Guide.pdf" download><Typography variant='body1'>Claim Your Manual</Typography></a>
            </Box>
          </Box>
        </Grid>
        <Grid item sx sm={6} align="center" >
          <div className={classes.image}>
            <img
                className={classes.img}
                src={paxtools} />
          </div>
        </Grid>
        </Grid>
      </Container>
  </Layout>
    )
  }
}
export default withStyles(styles)(Recipes);
