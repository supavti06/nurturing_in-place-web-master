import { trackCustomEvent } from 'gatsby-plugin-google-analytics'
import { withStyles } from '@material-ui/core/styles';
import React from 'react'
import { Link } from 'gatsby'
import SocialMediaCard from '../components/socialMediaCard'
import Layout from '../components/layout'
import Feedback from '../components/feedback'
import { sidebar } from '../pages/discovery'
import { makeStyles } from '@material-ui/core/styles';
import Sidebar from '../components/sidebar'
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import GetAppIcon from '@material-ui/icons/GetApp';
import Typography from '@material-ui/core/Typography';
import axios from 'axios';
import SEO from "../components/seo"
import Icon from '../images/png/001-family.png';
import { Breadcrumbs, Box } from '@material-ui/core';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import Divider from '@material-ui/core/Divider';
import {recipeData} from '../pages/kernels/recipes'
import {kernelData} from '../pages/kernels/PAX'
import KernelPost from '../components/kernelPost';

import Kernel from "../components/kernel"

const styles = theme => ({
  root: {
  //   flexGrow: 1,
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  authorName: {
    textDecoration: 'none',
    color: 'black',
    "&:hover, &:focus, &:active, &:visited": {
      color: 'black',
      // backgroundColor: ({ hoverBackgroundColor, backgroundColor }) =>
      //   hoverBackgroundColor
      //     ? hoverBackgroundColor
      //     : emphasize(backgroundColor, 0.08)
    },
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
  blogText: {
    textIndent: "10mm"
  },
  downimage: {
    width: 40,
    height: 40,
    WebkitTransform: 'rotate(180deg)',
    transform: "scaleX(-1)",
    marginTop: "14px",
    marginLeft: "10px"
    },
  upimage: {
    marginTop: "14px",
    width: 40,
    height: 40
  },
  feedbackPaper: {
    marginTop: "20px",
    marginBottom: "20px",
  },
  feedbackBox: {
  }
})

class RecipeTemplate extends React.Component {
  state = {
    loading: true,
    blog: [],
    suggestedContent: [],
    pathname: ""
  }
  constructor(props){
    super(props)
  }
  getId(id){
    for(var i = 0; i < kernelData.length; i++){
      if(kernelData[i].id == id){
        return kernelData[i]
      }
    }
    return null
  }
  componentDidMount() {
        var index = this.props.location.pathname.split('/recipes/')[1].split('/')[0]
        index--
        var recipe = recipeData[index]
        var nextKernel = {}
        var previousKernel = {}
        var featuredKernel = []
        for(var i = 0; i < recipe.Features.length; i++){
          var relatedKernel = this.getId(recipe.Features[i].kernelId)
          featuredKernel.push(relatedKernel)
        }
        if(index - 1 >= 0){
          previousKernel = recipeData[index - 1]
        }
        if(index + 1 < recipeData.length){
          nextKernel = recipeData[index + 1]
        }
        if(typeof recipe !== 'undefined'){
          this.setState({
            article: {
              next: {
                title: nextKernel.Title,
                url: '/recipes/'+ nextKernel.id,
              },
              previous: {
                title: previousKernel.Title,
                url:  '/recipes/'+ previousKernel.id,
              }
            },
            recipe: {
              id: recipe.id,
              Title: recipe.Title,
              Subtitle: recipe.Subheader,
              Features: recipe.Features,
              Endnote: recipe.Endnote,
              Url: '',
              Footer: true,
              download: recipe.download,
              Color: 'linear-gradient(to bottom, #36d1dc, #5b86e5)',
              image: recipe.Image
            },
            featuredKernel: featuredKernel,
            loading: false,
            pathname: this.props.location.pathname
          })

        }
  }

  formatText(text){
    let formattedText = ""
    let paragraphs = []
    formattedText = text.substring(1, text.length - 1);
    paragraphs = formattedText.split('\\n')
    return paragraphs[0]
  }

  // classes = useStyles();
  render(){
    const { classes } = this.props;
    return(
     !this.state.loading &&
      <Layout>
      <SEO image={this.state.recipe.image} title={this.state.recipe.Title} />
      {/* <div style={{background: 'rgba(240, 255, 247,0.75)', margin: 'auto', paddingTop: 15, paddingLeft: 15}} >

      <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
        <Link style={{textDecoration: 'none', color: '#DB0071'}} color="inherit" to="/recipes">
          Recipes
        </Link>
        <Typography style={{ fontFamily: "Bookman Old Style" }} color="textPrimary">{this.state.recipe.Title}</Typography>
      </Breadcrumbs>
      </div> */}
      <Grid container spacing={5}>
         <Grid item xs={12} md={12} style={{padding: 10, paddingTop: 50,}}>
         <Typography variant="h4" style={{justifyContent: 'center', alignItems: 'center', textAlign: 'center', fontFamily: "Bookman Old Style", margin:20}}>{this.state.recipe.Title}</Typography>
          {/* <h1 style={{justifyContent: 'center', alignItems: 'center', textAlign: 'center'}}>{this.state.recipe.Title}</h1> */}
          <Divider  />
         <div style={{padding:20, justifyContent: 'center', textAlign: 'center'}}>
         <img
            src={this.state.recipe.image}
            alt={this.state.recipe.image}
            height="auto"
            width='50%'
            style={{marginLeft: "5%", float:"right"}}
          />
          </div>
         <div style={{padding:30}}>
          {/* <h3> {this.state.recipe.Subtitle}</h3> */}
          <Typography variant="h6" style={{ fontFamily: "Bookman Old Style", marginBottom:20}}>{this.state.recipe.Subtitle}</Typography>         <div >
          <ol style={{backgroundColor: '#fafafa', marginLeft: 20, padding:30 }}>
            {this.state.recipe.Features.map((item,index) => (
              <li  style={{ padding:20 }}>
                <Box >
                  <Typography variant="body1" style={{marginBottom: 20, fontFamily: "Bookman Old Style"}}>
                    {item.text}
                  </Typography>
                </Box>
                { this.state.featuredKernel[index] &&
                <Grid item xs={12} md={12} style={{backgroundColor: '#fff7de', borderLeft: '3px solid #ffd342'}}>
                  <KernelPost key={kernelData.id} data={this.state.featuredKernel[index]} ></KernelPost>
                </Grid>
                }
              </li>
            ))}
          </ol>
          </div>

          <Typography style={{textIndent: "0mm", fontFamily: "Bookman Old Style"}} variant="body1">
            {this.state.recipe.Endnote}
          </Typography>
        </div>

      <Feedback message="Was this recipe useful to you?" pathname={this.state.pathname}></Feedback>
      <SocialMediaCard pathname={this.state.pathname} ></SocialMediaCard>
        {/* next and prev recipe function */}
        <Grid container style={{marginTop: 30, marginBottom: 30}} spacing={5}>
          <Grid item xs={12} sm={6}  >
            {this.state.article.previous.title &&
            <Link style={{ borderRadius: 10,padding: 15,textDecoration: 'none', backgroundColor: '#DB0071'}} color="inherit" to={this.state.article.previous.url}>
              <Typography style={{fontSize: 14,color: 'white'}} variant="button">
              Back - {(this.state.article.previous.title.length < 14) ? this.state.article.previous.title: this.state.article.previous.title.substring(0, 14)+'...'}
              </Typography>
            </Link>
            }
              </Grid>
              <Grid item xs={12} sm={6} style={{textAlign: 'right'}}>
                {this.state.article.next.title &&
              <Link style={{ borderRadius: 10, padding: 15,textDecoration: 'none', backgroundColor: '#DB0071'}} color="inherit" to={this.state.article.next.url}>
              <Typography style={{fontSize: 14,color: 'white'}} variant="button">
              Next - {(this.state.article.next.title.length < 18) ? this.state.article.next.title: this.state.article.next.title.substring(0, 14)+'...'}
              </Typography>
            </Link>
            }
          </Grid>
        </Grid>
          </Grid>
          {/* <Sidebar
            title={sidebar.title}
            description={sidebar.description}
            archives={sidebar.archives}
            social={sidebar.social}
            suggestedContent={this.state.suggestedContent}
          /> */}
        </Grid>

      </Layout>
    )
  }
}
export default withStyles(styles)(RecipeTemplate);
