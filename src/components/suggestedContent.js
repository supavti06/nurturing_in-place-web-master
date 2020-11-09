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
    padding: 10
  },
  paper: {
    background: 'rgba(240, 255, 247,0.75)',
    boxShadow: 'none',
    maxWidth: 1000,
    overflow: 'hidden',
  },
  image: {
    width: "auto",
    height: "100%",
  },
  img: {
    overflow: 'hidden',
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
  title: {

    fontSize: "24px"
  },
  subheading: {
    fontSize: "16px",
    color: "black"
  },
  sideCard: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 'auto',
    // padding:,
    paddingBottom: 5,

  },
  sideCardText: {

    padding: theme.spacing(2),

  }
}));

export default function SuggestedContent(props) {
  const { node, path, url} = props
  const classes = useStyles();
  // alert(JSON.stringify(node))
  

    return (
        <div className={classes.root}>

          <Paper className={classes.paper} variant="none" square>
            <Link href={`/${url}`}>
              <Grid className={classes.sideCard} container margin="none" spacing={0}>

                <Box >
                  <Grid item>
                      <ButtonBase className={classes.image} >
                      <img
                      className={classes.img}
                      src={node.image}
                      alt={node.image}
                    />
                      </ButtonBase>
                  </Grid>
                </Box>
                <Grid container style={{ borderLeft: '3px solid #80ffbd' }}direction="column" sm={12} xs={12}>
                  <Grid item className={classes.sideCardText} spacing={0}>
                    <Typography className={classes.title}>
                        <Link href={`/${url}`}>{node.title}</Link>
                      </Typography>
                      <Typography className={classes.subheading}>
                        {node.subheading}
                      </Typography>
                </Grid>
              </Grid>
              </Grid>
              </Link>
          </Paper>
        </div>)
  }
