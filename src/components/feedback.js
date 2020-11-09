import { trackCustomEvent } from 'gatsby-plugin-google-analytics'
import SubscribeModal from "../components/subscribeModal"
import CriticismModal from "../components/criticismModal"
import { FaBeer, FaFacebook, FaTwitter } from 'react-icons/fa';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
// import FaFacebook from "react-icons/fa/facebook";
// import FaTwitter from "react-icons/fa/twitter";
import { ShareButtonRectangle, ShareBlockStandard } from "react-custom-share";
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import React, { useState } from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import likeimage from '../images/like.png';

const useStyles = makeStyles((theme) => ({
    root: {
    //   flexGrow: 1,
    },
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    text: {
        fontSize: 22
    },
    // downimage: {
    //   width: 40,
    //   height: 40,
    //   WebkitTransform: 'rotate(180deg)',
    //   transform: "scaleX(-1)",
    //   marginTop: "14px",
    //   marginLeft: "10px"
    //   },
    // upimage: {
    //   marginTop: "14px",
    //   width: 40,
    //   height: 40
    // },
    feedbackPaper: {
      marginTop: "-20px",
      marginBottom: "20px",
    },
    feedbackBox: {
    },
    likePanel: {
        // alignContent: "center",
        // justifyContent: "center",
        // flexDirection: "row",
        marginTop: 2,
        marginBottom: 7
    }
  }))

export default function Feedback(props) {
    const classes = useStyles();
    const { emailData } = props
    // const [email, setEmail] = useState();
    const [openSubscribe, setOpenSubscribe] = useState(false);
    const [openCriticism, setOpenCriticism] = useState(false);
    var index = 0;

    if(props.pathname[props.pathname.length - 1] === "/"){
        var temp = props.pathname.substring(0, props.pathname.length - 1)
    }
    else{
        var temp = props.pathname
    }
    var opCriticism = event => {
        setOpenSubscribe(false)
        setOpenCriticism(true)
    }
    var opSubscribe = event => {
        setOpenCriticism(false)
        setOpenSubscribe(true)
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
        {
            openSubscribe &&
                <SubscribeModal pathname={props.pathname} open={true}></SubscribeModal>
        }
        {
            openCriticism &&
                <CriticismModal pathname={props.pathname} open={true}></CriticismModal>
        }
        {/* <ShareBlockStandard {...shareBlockProps} /> */}

        <Box mt={3} className={classes.feedbackBox} textAlign="center">
            <Typography className={classes.text}>
                {props.message}
            </Typography>
            <Grid className={classes.likePanel}>
                <Button type="button"
                onClick={e => {
                    // To stop the page reloading
                    e.preventDefault()
                    // Lets track that custom click
                    trackCustomEvent({
                      category: "Liked",
                      action: "Click",
                      label: "nurturinginplace.com" + props.pathname,
                    })
                    opSubscribe()
                  }}
                  >
                {/* <ThumbUpIcon style={{ fontSize: 50, color: "#5fe387" }} /> */}
                {
                    !openSubscribe &&
                    <ThumbUpIcon style={{ fontSize: 50, color: "grey" }} />
                }
                {
                    openSubscribe &&
                    <ThumbUpIcon style={{ fontSize: 50, color: "#5fe387" }} />
                }

                </Button>
                <Button type="button"
                onClick={e => {
                    e.preventDefault()
                    trackCustomEvent({
                      category: "Disliked",
                      action: "Click",
                      label: "nurturinginplace.com" + props.pathname,
                    })
                    opCriticism()
                    }}>
                    {
                    !openCriticism &&
                    <ThumbDownIcon style={{ fontSize: 50, color: "grey" }} />
                }
                {
                    openCriticism &&
                    <ThumbDownIcon style={{ fontSize: 50, color: "#DB0071" }} />
                }
                </Button>
            </Grid>
        </Box>
      </Paper>

    )
}
