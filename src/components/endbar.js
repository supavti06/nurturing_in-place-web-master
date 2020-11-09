import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import SuggestedContent from './suggestedContent'
var seoImage = 'https://nurture-images.s3-us-west-2.amazonaws.com/kidscomp.jpg'

// import other from '../images/family2comp.jpg';
// var other = 'https://nurture-images.s3-us-west-2.amazonaws.com/family2compressed2.jpg';

const useStyles = makeStyles((theme) => ({
  endAboutBox: {
    padding: theme.spacing(2),
    backgroundColor: theme.palette.grey[200],
  },
  endSection: {
    marginTop: theme.spacing(3),
  }
}));
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;
  while (0 !== currentIndex) {

    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

function Suggestion({prefix,...document}){
  
  var url = document.title
  url = url.replace(/,/g,'');
  url = url.replace(/\s/g, '-');
  url = url.replace(/\’/gi,'');
  url = url.replace(/\'/gi,'');
  url = prefix + url
  return (
    <Grid container xs={12} sm={6} md={4}>
    <SuggestedContent key={document.id} node={document} url={url}></SuggestedContent>
  </Grid>
  )
}
export default function Endbar(props) {
  const classes = useStyles();
  const { suggestedContent, prefix } = props;
  var content = []
  if(suggestedContent.length > 1){

    var randomize = shuffle(suggestedContent)


    for(var i = 0; i < 3; i++){
      var selectedPost = randomize[i]
      content.push({
        id: selectedPost.id,
        image: selectedPost.image,
        title: selectedPost.title,
        subheading: selectedPost.subheading,
        url: "/"+ selectedPost.id
      })
    }
  }

  return (
    <Grid container xs={12}>
      {content &&
        content.map(document => (
          <Suggestion {...document} prefix={prefix}></Suggestion>
        ))
      }
    </Grid>
  );
}

Endbar.propTypes = {
  description: PropTypes.string,
  social: PropTypes.array,
  title: PropTypes.string,
};
