import Icon from '@material-ui/core/Icon';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import React from "react"
import { Link, graphql } from 'gatsby'
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from 'gatsby-image'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import HeroBanner from '../components/heroBanner'
import TwitterIcon from '@material-ui/icons/Twitter';
import Main from '../components/main';
import { withStyles } from '@material-ui/core/styles';
import Kernel from "../components/kernel"
import StyledButton from "../components/styledButton"
import "react-responsive-modal/styles.css";
import SubscribeModal from "../components/subscribeModal"
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
  title: 'Kernels For Kids',
  description: "Kernels are simple ways of promoting good behavior. Here are some simple recipes for things you can do that will help you promote health and happiness in your family",
  image: seoImage,
  imgText: 'main image description',
  linkText: 'Continue reading…',
};
const kernelData = [
  {

    id: 1,
    Title: "PAX Kernels",
    Subheader: '',
    Url: '/kernels/PAX',
    // Color: '#dce35b',
    Color: 'linear-gradient(to bottom, #dce35b, #45b649)',
  },
  {
    id: 2,
    Title: "PAX Family Favorite Recipes",
    Subheader: "",
    Url: '/kernels/recipes',
    // Color: '#36d1dc',
    Color: 'linear-gradient(to bottom, #36d1dc, #5b86e5)',
  }
]
const kernel2Data = [
  {

    id: 1,
    Title: "Example",
    Subheader: '',
    Url: '/kernels/PAX',
    // Color: '#dce35b',
    Color: 'linear-gradient(to bottom, #eea849, #f46b45)',
  },
]
class Kernels extends React.Component {
  state = {
    open: false,
    email: ""
}
cons

  componentDidMount(){
    this.setState({
      // open: true
    })
  }

  render() {
    const { open } = this.state;
    // const { classes } = this.props;
    const { classes } = this.props;

  return (
    <Layout>
        <SEO image={seoImage} title="Kernels for Kids | Simple ways of promoting good behavior." />

      <HeroBanner post={nurturingHeroPage} />
        {/* <SubscribePopup></SubscribePopup> */}

        <div style={{paddingBottom: 80}}>
        <Grid container spacing={2} direction="row">
          <Grid item xs={12} md={6}>
            <StyledButton title="Kernels for Kids" data={kernelData[0]}/>
          </Grid>
          <Grid item xs={12} md={6}>
            <StyledButton title="Kernels for Kids" data={kernelData[1]}/>
          </Grid>
        </Grid>
        </div>
  </Layout>
    )
  }
}

  export default withStyles(styles)(Kernels);
