import Icon from '@material-ui/core/Icon';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import React from "react"
import { Link, graphql } from 'gatsby'
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from 'gatsby-image'
import {Box, Grid} from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import HeroBanner from '../components/heroBanner'
import TwitterIcon from '@material-ui/icons/Twitter';
import { withStyles } from '@material-ui/core/styles';
import "react-responsive-modal/styles.css";
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
    }
});
const nurturingHeroPage = {
  title: 'About Nurturing In Place',
  description: "We offer practical, immediately actionable tools to help you through the COVID crisis",
  image: seoImage,
  imgText: 'main image description',
  // linkText: 'Continue reading…',
};
const kernelData = [
  {

    id: 1,
    Title: "Taking Care Of Yourself",
    Subheader: '',
    Content: 'If you want to cope with these challenging times, you need to take care of yourself. Get specific suggestions on how you can help yourself',
    Url: '/takingcare',
    // Color: '#dce35b',
    Color: 'linear-gradient(to bottom, #dce35b, #45b649)',
  },
  {
    id: 2,
    Title: "Kernels For Kids",
    Subheader: "",
    Content: 'Kernels are simple ways of promoting good behavior. Here are some simple recipes for things you can do that will help you promote health and happiness in your family',

    Url: '/kernels',
    // Color: '#36d1dc',
    Color: 'linear-gradient(to bottom, #36d1dc, #5b86e5)',
  },
  {

    id: 3,
    Title: "Useful Resources For Parents",
    Subheader: '',
    Content: 'Here are some other evidence-based resources that you can explore',

    Url: '/other',
    // Color: '#dce35b',
    Color: 'linear-gradient(to bottom, #eea849, #f46b45)',
  },
  // {
  //   id: 4,
  //   Title: "FAQ",
  //   Subheader: "",
  //   Content: 'What can we help you with?',
  //   Url: 'faq',
  //   // Color: '#36d1dc',
  //   Color: 'linear-gradient(to bottom, #dce35b, #45b649)',
  // }
]

class About extends React.Component {
  state = {
    open: false,
    email: ""
}

  componentDidMount(){
    this.setState({
      // open: true
    })
  }

  render() {
    const { open } = this.state;
    const { classes } = this.props;

  return (
    <Layout>
      <HeroBanner post={nurturingHeroPage} />
        <div style={{paddingTop:20, width: '100%'}}>
        <Grid container spacing={2}>
          { kernelData.map((data) => (
            <Grid item xs={12} sm={6} style={{padding: 20}}>
                <Box

                        display="flex"
                        width='100%'
                        minHeight={200}
                        padding={2}
                        marginBottom={2}
                        alignItems="center"
                        justifyContent="center"
                        flexDirection='column'
                        style={{background: 'rgba(120, 255, 215, 0.1)'}}
                      >
                        <Typography variant="h5">

                {data.Title}
                </Typography>
                    <Box padding={2}>
                    <Typography variant="body1">
                          {data.Content}
                        </Typography>
                      </Box>
                    <Box mt={2}>
                    <Button style={{background: data.Color}} href={data.Url}>Go To Page</Button>

                      </Box>
                </Box>
          </Grid>

          ))}
        </Grid>
        </div>
  </Layout>
    )
  }
}

  export default withStyles(styles)(About);
