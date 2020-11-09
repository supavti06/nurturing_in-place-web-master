import Link from '@material-ui/core/Link';
import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Footer from './footer';
import { createMuiTheme, ThemeProvider, makeStyles } from '@material-ui/core/styles';
import Header from "./header"
import "./parentLayout.css"
import Container from '@material-ui/core/Container';
import JosefinSansRegular from '../fonts/JosefinSans-Regular.ttf';
import CssBaseline from "@material-ui/core/CssBaseline";
import {Snackbar, Button,IconButton, Typography} from '@material-ui/core';
import Cookies from 'universal-cookie';
import CloseIcon from '@material-ui/icons/Close';
const sections = [
  { id: 0, title: 'Taking Care Of Yourself', url: '/takingcare' },
  { id: 1, title: 'Kernels For Kids', child:[
    { title: 'Overview', url: '/kernels' },
    { title: 'Pax Kernels', url: '/kernels/PAX' },
    { title: 'Recipes for Parents', url: '/kernels/recipes' },
  ] },
  { id: 2, title: 'Useful Resources For Parents', child:[
    { title: 'Overview', url: '/other' },
    { title: 'CHILDREN AND COVID-19', url: '/other/children' },
    { title: 'Schooling Children at Home', url: '/other/homeschooling' },
    { title: 'Parenting Teens', url: '/other/parentingteens' },
    { title: 'Parenting Young Children', url: '/other/parentingyoung' },
  ]},
  { id: 3, title: 'Donate', url: 'https://charity.gofundme.com/o/en/campaign/nurturing-in-place' },
];

const simple = [
  { id: 0, title: 'Taking Care Of Yourself', url: '/takingcare' },
  { id: 1, title: 'Kernels For Kids', url: '/kernels' },
  { id: 2, title: 'Useful resources for parents', url: '/other' },
  { id: 3, title: 'Donate', url: 'https://charity.gofundme.com/o/en/campaign/nurturing-in-place' },
];

const useStyles = makeStyles((theme) => ({
  snack: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
  cookieText: {
    fontSize: 15,
  },
  acceptButton: {
    justifyContent: 'center'
  }
}));

const bodyStyle = {
  width: '100%',
}
const ParentLayout = ({ children }) => {


  const classes = useStyles();
  const cookies = new Cookies();
  var showCookie = true;
  if(cookies.get('show-accept') != undefined) {
    showCookie = false;
  }
  const [open, setOpen] = React.useState(showCookie);

  const handleClose = () => {
    setOpen(false);
    cookies.set('show-accept', false);
  };
  const handleQuit = () => {
    setOpen(false);
  };
  const actionButton = (
    <React.Fragment>

      {/* <div style={{flex: 0.1, position:'relative', height: '100%', margin: 'auto', border: '1px solid black'}}> */}
        <Button onClick={handleClose} color="secondary" size="small">
          Accept
        </Button>
        {/* </div> */}
      {/* <IconButton size="small" aria-label="close" color="inherit" onClick={handleQuit}>
        <CloseIcon fontSize="small" />
      </IconButton> */}
   </React.Fragment>
  );
  const message = (
    <React.Fragment>
        <Typography className={classes.cookieText}>
        We use cookies to offer you a better experience. By continuing to use this website, you consent to the use of cookies as described in our <Link href={`/terms`}>Terms Of Service</Link>
      </Typography>
   </React.Fragment>
  );



  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header title="Nurturing In Place" sections={sections} />
          <main >{children}</main>
      <Footer title="Nurturing In Place" description="Education families to help cope during the quarantine." menu={sections}/>
      <div className={classes.snack}>
        <Snackbar bodyStyle={bodyStyle} open={open} message={message} action={actionButton} />
      </div>
    </ThemeProvider>
  )
}

ParentLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

const JosefinSans = {
  fontFamily: 'Josefin Sans',
  src: `
    url(${JosefinSansRegular}) format('ttf')
  `,};
export default ParentLayout
const theme = createMuiTheme({
  palette: {
    background: {
      default: '#fafafa'
    },
    primary:{
        main: '#DB0071',
      }
  },
  typography: {
    fontFamily: "Arial, Helvetica, sans-serif"  ,
    h1: {
      fontFamily: "Arial, Helvetica, sans-serif" ,

    },
    h2: {
      fontFamily: "Arial, Helvetica, sans-serif" ,
    },
    h3: {
      fontFamily: "Arial, Helvetica, sans-serif" ,

    },
    h4: {
      fontFamily: "Arial, Helvetica, sans-serif" ,
      color: '#2a613b'
    },
    h5: {
      fontFamily: "Arial, Helvetica, sans-serif" ,

    },
    body1: {
      // fontFamily: "Georgia, serif",
    }
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '@font-face': [JosefinSans],
      },
    },
  },
});