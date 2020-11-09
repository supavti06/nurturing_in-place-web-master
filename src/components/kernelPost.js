import Link from '@material-ui/core/Link';
import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import {CardContent,CardActionArea, CardActions, Button } from '@material-ui/core';
import CardMedia from '@material-ui/core/CardMedia';
import Hidden from '@material-ui/core/Hidden';
import GetAppIcon from '@material-ui/icons/GetApp';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
const useStyles = makeStyles({
  card: {
    display: 'flex',
    background: '#fc4503'
  },
  cardDetails: {
    flex: 1,
    // padding: 10

  },
  cardMedia: {
    width: 160,
  },
  cardList: {
    // paddingTop: 10
  },
  link: {
    textDecoration: 'none',
    color: 'black'
  }
});

export default function KernelPost(props) {
  const classes = useStyles();
  const { data } = props;

  return (

        <Card style={{background: 'inherit'}} elevation={0} className={classes.card}>
          <div className={classes.cardDetails}>
           { data.Url ?

          <CardActionArea component="a" disableRipple>

            <Link className={classes.link} href={data.Url}>
              <CardContent style={{padding: 20}}>
                <Typography style={{ fontFamily: "Bookman Old Style" }} component="h2" variant="h5">
                  {data.Title && data.Title}
                </Typography>
                <Typography style={{ fontFamily: "Bookman Old Style" }} variant="subtitle1" color="textSecondary">
                  {data.Subheader && data.Subheader}
                </Typography>
                <ul className={classes.cardList}>
                  {data.Features && data.Features.map((number) =>
                    <li><Typography style={{ fontFamily: "Bookman Old Style" }} variant="subtitle1" paragraph>{number}</Typography></li>
                  )}
                </ul>
                <Typography style={{ fontFamily: "Bookman Old Style" }} variant="subtitle1" color="textSecondary">
                  {data.Endnote && data.Endnote}
                </Typography>
              </CardContent>
              </Link>
              </CardActionArea>

              :
          <CardActionArea component="a" disableRipple>
            <CardContent >
              <ExpansionPanel elevation={0} style={{background: 'none'}}>
                 <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} >
                 <div>
                 <Typography style={{ fontFamily: "Bookman Old Style" }} variant="h5">
                  {data.Title && data.Title}
                </Typography>
                <Typography style={{ fontFamily: "Bookman Old Style" }} variant="subtitle1" color="textSecondary">
                  {data.Subheader && data.Subheader}
                </Typography>
                </div>
                   </ExpansionPanelSummary>
                   <ExpansionPanelDetails style={{flexDirection: "column"}}>
                      <ul className={classes.cardList}>
                        {data.Features && data.Features.map((number) =>
                          <li><Typography style={{ fontFamily: "Bookman Old Style" }} variant="subtitle1" paragraph>{number}</Typography></li>
                        )}
                      </ul>
                      <Typography style={{ fontFamily: "Bookman Old Style" }} variant="subtitle1" color="textSecondary">
                        {data.Endnote && data.Endnote}
                      </Typography>
                   </ExpansionPanelDetails>
                </ExpansionPanel>
              </CardContent>
              </CardActionArea>

              }

              {data.Footer && data.download &&
                    <CardActions>
                      <Button size="medium" onClick={() => trackCustomEvent({
                      category: "Kernel",
                      action: "Downloading",
                      label: data.Title,
                    })} href={data.download} download><GetAppIcon></GetAppIcon>Download PDF</Button>
                    </CardActions>
              }
            </div>
        </Card>

  );
}

KernelPost.propTypes = {
  data: PropTypes.array,
};
