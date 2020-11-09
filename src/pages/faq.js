import HeroBanner from '../components/heroBanner'
import React from 'react';
import SEO from "../components/seo"
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Layout from "../components/layout"
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

var seoImage = 'https://nurture-images.s3-us-west-2.amazonaws.com/faq2.jpg';
const useStyles = makeStyles((theme) => ({
    heading: {
        // color: "#3252a8"
    },
    questions: {
        // marginTop: 30
    },
}));
const nurturingHeroPage = {
    title: 'FAQ',
    description: "What can we help you with?",
    image: seoImage,
    imgText: 'main image description',
    linkText: 'Continue reading…',
  };


export default function Faq(props) {
  const classes = useStyles();

  return (
    <Layout>
      <SEO image={seoImage} title="Frequently Asked Questions | Answers to the most frequently asked questions from our readers." />

        <HeroBanner post={nurturingHeroPage} />

        <Grid
            alignItems="center"
            direction="column"
            justify="center"
            container item xs={12} md={12}>

            <Grid className={classes.questions} item xs={12}>

            <ExpansionPanel elevation={0} style={{background: 'rgba(0, 232, 112, 0.1)'}}>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} >
                <Typography className={classes.heading}>What will help my kids deal with anxiety over the pandemic?</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                <Typography>
                Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est, id dignissim
                    quam.
                Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est, id dignissim
                    quam.
                    Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est, id dignissim
                    quam.
                Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est, id dignissim
                    quam.
                </Typography>
                </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel elevation={0} style={{background: 'rgba(0, 232, 112, 0.1)'}}>

                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} >
                <Typography className={classes.heading}>How do I get my children to be less aggressive?</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                <Typography>
                Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est, id dignissim
                    quam.
                Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est, id dignissim
                    quam.
                    Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est, id dignissim
                    quam.
                Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est, id dignissim
                    quam.
                </Typography>
                </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel elevation={0} style={{background: 'rgba(0, 232, 112, 0.1)'}}>

                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} >
                <Typography className={classes.heading}>How can I get my kids to get off their phone?</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                <Typography>
                Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est, id dignissim
                    quam.
                Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est, id dignissim
                    quam.
                    Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est, id dignissim
                    quam.
                Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est, id dignissim
                    quam.
                </Typography>
                </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel elevation={0} style={{background: 'rgba(0, 232, 112, 0.1)'}}>

                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} >
                <Typography className={classes.heading}>How can I get my kids to be more interested in learning?</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                <Typography>
                Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est, id dignissim
                    quam.
                Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est, id dignissim
                    quam.
                    Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est, id dignissim
                    quam.
                Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est, id dignissim
                    quam.
                </Typography>
                </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel elevation={0} style={{background: 'rgba(0, 232, 112, 0.1)'}}>

                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} >
                <Typography className={classes.heading}>How much COVID content should I allow my kids to see?</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                <Typography>
                Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est, id dignissim
                    quam.
                Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est, id dignissim
                    quam.
                    Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est, id dignissim
                    quam.
                Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est, id dignissim
                    quam.
                </Typography>
                </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel elevation={0} style={{background: 'rgba(0, 232, 112, 0.1)'}}>

                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} >
                <Typography className={classes.heading}>What are the developmental differences in how one talks about COVID?</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                <Typography>
                Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est, id dignissim
                    quam.
                Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est, id dignissim
                    quam.
                    Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est, id dignissim
                    quam.
                Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est, id dignissim
                    quam.
                </Typography>
                </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel elevation={0} style={{background: 'rgba(0, 232, 112, 0.1)'}}>

                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} >
                <Typography className={classes.heading}>How do I cope with grief or trauma after losing a loved one?</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                <Typography>
                Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est, id dignissim
                    quam.
                Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est, id dignissim
                    quam.
                    Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est, id dignissim
                    quam.
                Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est, id dignissim
                    quam.
                </Typography>
                </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel  elevation={0} style={{background: 'rgba(0, 232, 112, 0.1)'}}>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} >
                <Typography className={classes.heading}>How can parents working in the medical field talk with their children?</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                <Typography>
                Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est, id dignissim
                    quam.
                Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est, id dignissim
                    quam.
                    Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est, id dignissim
                    quam.
                Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est, id dignissim
                    quam.
                </Typography>
                </ExpansionPanelDetails>
            </ExpansionPanel>
        </Grid>
    </Grid>
</Layout>

  );
}
