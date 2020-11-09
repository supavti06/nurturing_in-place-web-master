import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Chip from '@material-ui/core/Chip';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    padding: 10,
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 1000,
    // background: 'rgba(240, 255, 247,0.75)',
    boxShadow: 'none',
    // border: '2px solid rgb(230,230,230)',
    // borderLeft: '1px solid #80ffbd',
    boxShadow: ' 0px 0px 20px -7px rgb(180,180,200)',
  },
  image: {
    maxWidth: 180,
    maxHeight: 120,
    marginTop: 30,
    marginLeft: 10
    },
  img: {
    // margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
  // badges: {
  //   margin: 'auto',
  //   display: 'block',
  //   maxWidth: 50,
  //   maxHeight: '100%',
  //   borderRadius: '70px',

  // },
  textContainer: {
    // paddingTop: 20,
    marginTop: 15,
    maxWidth: 390
  },
  titleText: {
    lineHeight: 1.3
  }
}));

export default function BlogCard(props) {
  const { node, path} = props
  const classes = useStyles();

  const addThumbStringToImg = (text) => {
    if(props.pathPrefix === '/kernels/PAX/'){
      return text
    }
    var textArray = text.split(".jpg")
    return (textArray[0] + "-thumb.jpg")
  };

  const formulateUrlFromTitle = (title, Title) => {
    // if(typeof Title === 'undefined'){
      title = props.pathPrefix + title.replace(/,/g,'');
    // }
    // else{
    //   title = props.pathPrefix + Title.replace(/,/g,'');
    // }
    // title = props.pathPrefix + title.replace(/,/g,'');
    title = title.replace(/\’/gi,'');
    title = title.replace(/\'/gi,'');
    title = title.replace(/\s/g, '-');
    return title
  };


  return (
        <div className={classes.root}>

          <Paper className={classes.paper} elevation={10} square>
          <Link style={{textDecoration: 'none' ,color: 'inherit'}}href={formulateUrlFromTitle(node.title, node.Title)}>
            <Grid container spacing={2} >
              <Box mr={3} xs={12} sm={4}>
                <Grid item>
                    <ButtonBase className={classes.image} >
                    <img
                    className={classes.img}
                    src={addThumbStringToImg(node.image)}
                    alt={addThumbStringToImg(node.image)}
                  />
                    </ButtonBase>
                </Grid>
              </Box>
              <Grid container lg={7} sm={5} xs={5}>
                <Grid item spacing={0}>
                  <Grid item className={classes.textContainer}>
                    <Typography className={classes.titleText} variant="h6">
                      {node.title}
                    </Typography>
                    {/* <Typography variant="body1" color="textSecondary" >
                      {
                        (new Date(node.publishDate)).toLocaleDateString()
                      }
                    </Typography> */}
                    <Typography variant="body2" style={{ cursor: 'pointer' }}>
                    {node.subheading}
                    </Typography>
                    {/* {
                      node.categories &&
                      node.categories.map( obj => (
                        <Link style={{padding:'15px 5px 15px 5px' }} href={`/categories/${obj.Name}`}>
                          <Chip label={obj.Name}/>
                        </Link>
                      ))
                    } */}
                  </Grid>
              </Grid>
            </Grid>
            </Grid>
            </Link>
          </Paper>
        </div>)
  }
