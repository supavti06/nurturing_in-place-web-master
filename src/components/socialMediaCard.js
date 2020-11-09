import Box from '@material-ui/core/Box';
import { trackCustomEvent } from 'gatsby-plugin-google-analytics'
import { FaBeer, FaFacebook, FaTwitter } from 'react-icons/fa';
import { ShareButtonRectangle, ShareBlockStandard } from "react-custom-share";
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React, { useState } from 'react';

const useStyles = makeStyles((theme) => ({
    root: {
    //   flexGrow: 1,
    },
    paper: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    feedbackBox: {
    },
  }))

export default function SocialMediaCard(props) {
    const classes = useStyles();
    const { articleData } = props

    if(props.pathname[props.pathname.length - 1] === "/"){
        var temp = props.pathname.substring(0, props.pathname.length - 1)
    }
    else{
        var temp = props.pathname
    }
    const shareBlockProps = {
        url: "https://nurturinginplace.com" + temp,
        button: ShareButtonRectangle,
        buttons: [
          { network: "Twitter", icon: FaTwitter},
          { network: "Facebook", icon: FaFacebook},
        ],
        text: ``,
      };

    return(
        <Paper className={classes.feedbackPaper} variant="outlined">
            <ShareBlockStandard {...shareBlockProps} />
        </Paper>

    )
}
