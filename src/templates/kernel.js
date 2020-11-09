import { trackCustomEvent } from 'gatsby-plugin-google-analytics'
import { withStyles } from '@material-ui/core/styles';
import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Feedback from '../components/feedback'
import { sidebar } from '../pages/discovery'
import SocialMediaCard from '../components/socialMediaCard'
import { makeStyles } from '@material-ui/core/styles';
import Sidebar from '../components/sidebar'
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import GetAppIcon from '@material-ui/icons/GetApp';
import Typography from '@material-ui/core/Typography';
import axios from 'axios';
import SEO from "../components/seo"
import Icon from '../images/png/001-family.png';
import { Breadcrumbs } from '@material-ui/core';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import Divider from '@material-ui/core/Divider';
import {kernelData} from '../pages/kernels/PAX'
import Endbar from '../components/endbar'

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

class KernelTemplate extends React.Component {
  state = {
    loading: true,
    blog: [],
    suggestedContent: [],
    pathname: ""
  }
  constructor(props){
    super(props)
  }
  findKernelByPath(path){
    console.log("path")
    console.log(path)
    path = path.split('/kernels/PAX/')[1].split('/')[0]
    for (let index = 0; index < kernelData.length; index++) {
      var pathTitle = kernelData[index].Title.replace(/,/g,'');
      pathTitle = pathTitle.replace(/\s/g, '-');
      pathTitle = pathTitle.replace(/\’/gi,'');
      pathTitle = pathTitle.replace(/\'/gi,'');
      if(path === pathTitle){
        // console.log("kernel found")
        // console.log(kernelData[index].Title)
        return kernelData[index]
      }
      else{
        // console.log("kernel not found")
      }
    }
      // pathTitle = "/kernels/" +  kernelData[index].Title.replace(/,/g,'');
      // pathTitle = pathTitle.replace(/\s/g, '-');
      // pathTitle = pathTitle.replace(/\’/gi,'');
      // pathTitle = pathTitle.replace(/\'/gi,'');
  }
  componentDidMount() {
      // var index = this.props.location.pathname.split('/kernels/')[1].split('/')[0]
      // index--
      var kernel = this.findKernelByPath(this.props.location.pathname)
      var randomKernels = []
    /// 3 random articles
      // for(let i = 0; i < 3; i++) {
      //   var index = kernelData[Math.floor(Math.random() * kernelData.length)]
      //   randomKernels.push(index.splice(index, 1))
      // }

      if(typeof kernel !== 'undefined'){
        this.setState({
          kernels: randomKernels,
          kernel: {
            id: kernel.id,
            Title: kernel.Title,
            Subtitle: kernel.subheader,
            Features: kernel.Features,
            Endnote: kernel.Endnote,
            Url: '',
            Footer: true,
            download: kernel.download,
            Color: 'linear-gradient(to bottom, #36d1dc, #5b86e5)',
            image: kernel.image
          },
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
    const { classes, pageContext } = this.props;
    return(
      <Layout>
      <SEO image={pageContext.image} title={pageContext.title} />
      {/* <div style={{background: 'rgba(240, 255, 247,0.75)', margin: 'auto', paddingTop: 15, paddingLeft: 15}} >

      <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
        <Link style={{textDecoration: 'none', color: '#DB0071'}} color="inherit" to="/kernels">
          Kernels
        </Link>
        <Typography color="textPrimary">{pageContext.title}</Typography>
      </Breadcrumbs>
      </div> */}
      {!this.state.loading &&
      <Grid container spacing={5}>
         <Grid item xs={12} md={12} style={{padding: 10, paddingTop: 50,}}>
          <Typography variant="h4" style={{justifyContent: 'center', alignItems: 'center', textAlign: 'center', fontFamily: "Bookman Old Style", margin:20}}>{this.state.kernel.Title}</Typography>
          <Divider  />
         <div style={{backgroundColor: '', paddingTop:25, justifyContent: 'center', textAlign: 'center'}}>
          {/* <div style={{backgroundColor: 'red', borderRadius: 200, padding:30,  display: 'inline-block', marginBottom: 20}}> */}
          <img
            src={this.state.kernel.image}
            alt={this.state.kernel.image}
            height="auto"
            width='50%'
            style={{marginLeft: "5%", float:"right"}}
          />
            {/* </div> */}
          </div>
         <div style={{ padding:30}}>

    {this.state.kernel.id == 4 && <Typography variant="h6" style={{ fontFamily: "Bookman Old Style", marginBottom:20 }}>{this.state.kernel.Subtitle.split('video')[0]} <a href="https://bit.ly/PAX-Tools-Vision">video</a>{this.state.kernel.Subtitle.split('video')[1]}</Typography>}
        {this.state.kernel.id != 4 && <Typography variant="body1" style={{ fontFamily: "Bookman Old Style", marginBottom:20}}>{this.state.kernel.Subtitle}</Typography>}
         {/* <span><strong>Posted: </strong>{(new Date(this.state.kernel.publishDate)).toLocaleDateString()}</span> */}
         {/* <div style={{backgroundColor: '#f8f8f8', borderLeft: '3px solid #ffd342'}}> */}
         <div style={{backgroundColor: '#fff7de', borderLeft: '3px solid #ffd342'}}>
          <ol style={{ marginLeft: 20, padding:20 }}>
            {this.state.kernel.Features.map((item) => (
              <li  style={{ paddingLeft :20, paddingRight :20,  }}>
                <Typography variant="h6" style={{ fontFamily: "Bookman Old Style"}} variant="body1">
                  {item}
                </Typography>
              </li>
            ))}
          </ol>
          </div>

          <Typography style={{textIndent: "0mm", fontFamily: "Bookman Old Style"}} variant="body1">
              {this.state.kernel.Endnote}
          </Typography>
        </div>
            {this.state.kernel.download && <div style={{ padding:30, paddingTop: 10}}>

              <h3>Download this kernel</h3>
              <Button size="medium" onClick={() => trackCustomEvent({
                      category: "Kernel",
                      action: "Downloading",
                      label: this.state.kernel.Title,
                    })} href={this.state.kernel.download} download><GetAppIcon></GetAppIcon>Download PDF</Button>
        </div>
            }
            <Feedback message="Was this kernel useful to you?" pathname={this.state.pathname}></Feedback>
            <SocialMediaCard pathname={this.state.pathname} ></SocialMediaCard>

        {/* next and prev kernel function */}
        {/* <Grid container style={{marginTop: 30, marginBottom: 30}} spacing={5}>
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
        </Grid> */}
                <Endbar prefix={'kernels/PAX/'} suggestedContent={kernelData} ></Endbar>
          </Grid>
          {/* <Sidebar
            title={sidebar.title}
            description={sidebar.description}
            archives={sidebar.archives}
            social={sidebar.social}
            suggestedContent={this.state.suggestedContent}
          /> */}
        </Grid>}

      </Layout>
    )
  }
}
export default withStyles(styles)(KernelTemplate);
