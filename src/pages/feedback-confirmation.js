import axios from 'axios';
import React from 'react';
import SEO from "../components/seo"
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Layout from '../components/layout';
import { navigate } from 'gatsby'
import Icon from '../images/png/smileys.png';

const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      minHeight: "300px"
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    imgIcon: {
        width: 75,
        height: 75
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
    link: {
        fontSize: 18
    }
  }));
export default function FeedbackConfirmation() {
    const classes = useStyles();
    var state = {
    }


  return (
    <Layout>
        <SEO title="Feedback Confirmed | Stay up to date with the latest content." />
        <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
            <img src={Icon} className={classes.imgIcon} alt="happy face" />
            <Typography component="h1" variant="h5">
                Thank you for your feedback
            </Typography>
            <br />
            <br />
            <Link className={classes.link} href={`/`}>
                Back To Home Page
            </Link>
        </div>
        </Container>
    </Layout>
  )}
