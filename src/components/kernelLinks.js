import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import StyledButton from "./styledButton"
import { Container } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  markdown: {
    ...theme.typography.body2,
    padding: theme.spacing(3, 0),
  },
}));

export default function KernelLinks(props) {
  const classes = useStyles();
  const { posts, title, category } = props;

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        {title}
      </Typography>
      <Grid container spacing={4}>
        {posts.map(data => (
          <Grid item xs={12} sm={6}>
          <StyledButton key={data.id} title="" data={data} category={'/'+category+'/'}/>
          </Grid>
        ))
        }
      </Grid>
    </React.Fragment>

  );
}

KernelLinks.propTypes = {
  posts: PropTypes.array,
  title: PropTypes.string,
};

