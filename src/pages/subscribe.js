import axios from 'axios';
import React from 'react';
import SEO from "../components/seo"
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Layout from '../components/layout';
import { navigate } from 'gatsby'

var seoImage = 'https://nurture-images.s3-us-west-2.amazonaws.com/takingcare5.jpg'
const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));
export default function Subscribe({ data }) {
    const classes = useStyles();
    var state = {
        email: "",
        termsConditions: false
    }

    var handleInputChange = event => {
        if(event.target.name == "terms"){
            state.termsConditions = !state.termsConditions
        }
        else if(event.target.name == "email"){
            state.email = event.target.value
        }
    }

    var handleSubmit = event => {
        event.preventDefault()
        if(!state.termsConditions){
            alert("You must agree to the Terms Of Service")
        }
        else if(state.email == ""){
            alert("You must enter a valid email address")
        }
        else{
            axios.post('https://nurturinginplace.net:3000/subscribers',
            {
                email: state.email
            })
            .then(res => {
                navigate("/subscription-confirmation")
            })
        }
    }


  return (
    <Layout>
        <SEO image={seoImage} title="Subscribe Now | Stay up to date with the latest content." />

        <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
            <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
                Subscribe
            </Typography>
            <form className={classes.form} noValidate
                      onSubmit={handleSubmit}

            >
            <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                onChange={handleInputChange}
            />
            <FormControlLabel
                control={<Checkbox onChange={handleInputChange}
                value="remember" name="terms" color="primary" />}
                label={<Typography>I agree to the <Link rel="noopener noreferrer" target="_blank" href="/termsofservice">Terms of Service</Link></Typography>}
            />
            <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
            >
                Submit
            </Button>
            </form>
        </div>
        </Container>
    </Layout>
  )}
