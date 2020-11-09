import React from "react"
import {Grid,Paper, Typography,} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';

const useStyles = makeStyles(theme => ({
    root: {
    //   flexGrow: 1,
    },
    linksClass: {
        padding:"20px"
    },
    linksInner:{
      padding: 30,
    },
    image: {
        width: 70
    },
    img: {
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
    },
}));

export default function LinkCard(props) {
    const classes = useStyles();
    const { cardData } = props
    return (
        <Grid item className={classes.linksClass} xs={12} sm={6} md={4}>
        <Card elevation={0}>
            <CardActionArea>
            <Paper elevation={0} className={classes.linksInner} style={{background: '#e6ffd4'}}>
                <a target="_blank" href={cardData.url} style={{textDecoration: 'none'}}>
            <Grid justify="center" container spacing={2}>
            <Grid item>
                <div className={classes.image}>
                    <img className={classes.img} alt={cardData.title} src={cardData.image} />
                </div>
            </Grid>
            <Grid item sx={8} md={8} container>
                <Grid item xs direction="column" spacing={2}>
                <Grid item>
                    <Paper elevation={0} style={{padding: 10, background: '#e6ffd4'}}>
                    <Typography gutterBottom variant="subtitle1">
                    {cardData.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                        {cardData.description}
                    </Typography>
                    </Paper>
                </Grid>
                </Grid>
            </Grid>
            </Grid>
            </a>
            </Paper>
        </CardActionArea>
        </Card>
        </Grid>

        )
    }