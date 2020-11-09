import { withStyles } from '@material-ui/core/styles';
import React from 'react'
import { Link , navigate } from 'gatsby'
import Layout from '../components/layout'
import Feedback from '../components/feedback'
import SocialMediaCard from '../components/socialMediaCard'
import { sidebar } from '../pages/discovery'
import { makeStyles } from '@material-ui/core/styles';
import Sidebar from '../components/sidebar'
import Endbar from '../components/endbar'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import axios from 'axios';
import SEO from "../components/seo"
import { Breadcrumbs, Button } from '@material-ui/core';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import Divider from '@material-ui/core/Divider';

import { Helmet, HelmetProvider } from 'react-helmet-async';

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

class BlogTemplate extends React.Component {
  extraImageBool
  state = {
    loading: true,
    blog: [],
    suggestedContent: [],
    pathname: "",
    extraImage: ""
  }
  constructor(props){
    super(props)
    this.getEmail = this.getEmail.bind(this)
  }
  getEmail = (info) => {
    navigate("/")
    console.log(info)
    axios.post('https://nurturinginplace.net:3000/subscribers',
    {
        email: info
    }).then(res => {
        // this.setState({ open: false },
        navigate("/")
    }).catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
    });
  }
  removeQuotations = (blogText) => {
    if(blogText[0] == '"' && blogText[blogText.length -1 ] == '"'){
      return blogText.substring(1, blogText.length - 2)
    }
    return blogText
  }
  componentDidMount() {
    axios.get(`https://nurturinginplace.net:3000/blog`)
      .then(res => {
        var selectedPost = []
        var nextPost = null
        var previousPost = null
        var otherPosts = []
        console.log("searching for post!!!!!!!")
        // console.log(res.data.data[i])

        if(this.props.location.pathname === "When-You-Are-Completely-Overwhelmed:-Doing-the-Next-Small-Thing" || this.props.location.pathname === "/When-You-Are-Completely-Overwhelmed:-Doing-the-Next-Small-Thing"|| this.props.location.pathname === "/When-You-Are-Completely-Overwhelmed:-Doing-the-Next-Small-Thing/"){
          this.extraImageBool = true
        }
        else{
          this.extraImageBool = false
        }
        console.log("searching for post!!!!!!!")

        for(var i = 0; i < res.data.data.length; i++){
          var pathTitle = "/takingcare/" + res.data.data[i].title.replace(/,/g,'');
          pathTitle = pathTitle.replace(/\’/gi,'');
          pathTitle = pathTitle.replace(/\'/gi,'');
          pathTitle = pathTitle.replace(/\s/g, '-');
          console.log("this.props.location.pathname")
          console.log(this.props.location.pathname)
          console.log("pathTitle")
          console.log(pathTitle)
          if(this.props.location.pathname === "/" + pathTitle + "/" ||
            this.props.location.pathname === "/" + pathTitle ||
            this.props.location.pathname === pathTitle) {
            selectedPost = res.data.data[i]
            if(i - 1 > 0){
              nextPost = res.data.data[i - 1]
            }
            if(i + 1 < res.data.data.length){
              previousPost = res.data.data[i + 1]
            }
          }
          else{
            otherPosts.push(res.data.data[i])
          }
        }
        selectedPost.text = this.removeQuotations(selectedPost.text)
        this.setState({
          suggestedContent: otherPosts,
          loading: false,
          blog: selectedPost,
          pathname: this.props.location.pathname,
          article: {
            previous: previousPost,
            next: nextPost
          },
        })
      }).catch(error => {
        alert("Sorry we couldn't find that blog post")
      })
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
    const { classes, pageContext } = this.props;
    return(

      <Layout>
      <SEO image={pageContext.image} title={pageContext.title} />
      {/* <div style={{background: 'rgba(240, 255, 247,0.75)', margin: 'auto', paddingTop: 15, paddingLeft: 15}} >
        <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
          <Link style={{textDecoration: 'none', color: '#DB0071'}} color="inherit" to="/takingcare">
            Taking Care Of Yourself
          </Link>
          <Typography color="textPrimary">{this.state.blog.title}</Typography>
        </Breadcrumbs>
      </div> */}
     { !this.state.loading &&
      <Grid container style={{marginTop: 30, marginBottom: 30}} spacing={5}>
        <Grid item xs={12} md={12}>
          <Typography style={{textIndent: "0mm", marginBottom: '10px'}} variant="h4">{this.state.blog.title}</Typography>
          <Divider />
          <div style={{padding: 10}}>
            <span> <strong>Posted: </strong>{(new Date(this.state.blog.publishDate)).toLocaleDateString()}</span>
            <ul style={{ marginLeft: 0, listStyle: 'none', whiteSpace:'nowrap', overflowX: 'auto'}}>
              <li style={{display: 'inline-block', paddingRight: 7}}><strong>By: </strong> {this.state.blog.authors}</li>
            </ul>
          </div>
          <img
            src={this.state.blog.image}
            alt={this.state.blog.image}
            height="auto"
            width='40%'
            style={{marginLeft: "5%", float:"right"}}
          />

      <Grid item style={{ marginLeft: 20, marginRight: 20 }}>

        {this.state.blog.text.split('\\n').map(function(item, index) {
          if(index === 7 && item.substring(0,14) === "\nMaybe it will"){
            return <img
            src={"https://nurture-images.s3-us-west-2.amazonaws.com/momcard.jpg"}
            alt={"https://nurture-images.s3-us-west-2.amazonaws.com/momcard.jpg"}
            height="auto"
            width='40%'
            style={{marginLeft: "5%", float:"right"}}
          />
          }
          return (
            <Typography style={{textIndent: "0mm"}} variant="body1">
              {item}
              <br/>
              <br/>
              </Typography>
          )
        })}

        </Grid>

        <Feedback message="Was this article helpful?" pathname={this.state.pathname} emailData={this.getEmail}></Feedback>
        <SocialMediaCard pathname={this.state.pathname} ></SocialMediaCard>
        <Grid container style={{marginTop: 10, marginBottom: 10}} spacing={5}>
          {/* <Grid item xs={12} sm={12}  >
          {this.state.article.previous &&
            <Link style={{ borderRadius: 10,padding: 20,textDecoration: 'none', backgroundColor: '#DB0071'}} color="inherit" to={'/'+this.state.article.previous.id}>
              <Typography style={{fontSize: 14,color: 'white'}} variant="button">
                Back - {(this.state.article.previous.title.length < 13) ? this.state.article.previous.title: this.state.article.previous.title.substring(0, 14)+'...'}
              </Typography>
            </Link>
          }
          </Grid>
          <Grid item xs={12} sm={12} style={{textAlign: 'right'}}>
            {this.state.article.next &&
            <Link style={{ borderRadius: 10, padding: 20,textDecoration: 'none', backgroundColor: '#DB0071'}} color="inherit" to={'/'+this.state.article.next.id}>
              <Typography style={{fontSize: 14,color: 'white'}} variant="button">
                Next - {(this.state.article.next.title.length < 13) ? this.state.article.next.title: this.state.article.next.title.substring(0, 14)+'...'}
              </Typography>
            </Link>}
          </Grid> */}
        </Grid>

        <Endbar
          prefix={'takingcare/'}
          suggestedContent={this.state.suggestedContent}
        ></Endbar>

      </Grid>
    </Grid>
  }
  </Layout>

  )
}
}
export default withStyles(styles)(BlogTemplate);
