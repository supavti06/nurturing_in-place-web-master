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
    height: 120,
    alignItems: 'center',
    justifyContent: 'center'
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

export default function StyledButton(props) {
  const classes = useStyles();
  const { data, category } = props;

  return (
    <Grid item xs={12} className={classes.cardDetails}>
        <Card style={{background: data.Color}} >
          <CardActionArea className={classes.card} component="a" href={data.Url ? data.Url : category + data.id}>
              <CardContent style={{marginTop: 10}}>
                <Typography align="center" component="h2" variant="h5">
                  {data.Title && data.Title}
                </Typography>
              </CardContent>
            </CardActionArea>
        </Card>
    </Grid>
  );
}

StyledButton.propTypes = {
  data: PropTypes.array,
};
