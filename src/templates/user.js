import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Box, Typography, ButtonBase } from '@material-ui/core';
import BlogCard from '../components/blogCard'
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 1000,
  },
  image: {
    width: 128,
    height: 128,
    borderRadius: '70px',
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
    borderRadius: '70px',
  },
  badges: {
    margin: 'auto',
    display: 'block',
    maxWidth: 50,
    maxHeight: '100%',
    borderRadius: '70px',

  },
}));


export default function UserTemplate({props, data, data2}) {
  const classes = useStyles();
    return (

      <Layout className={classes.root}>
        <Grid item xs={12} md={8}>
          <Box className={classes.paper}>
            <Grid container spacing={4}>
              <Grid item xs={4}>
                  <ButtonBase className={classes.image} >
                    <img className={classes.img} alt="complex" src="https://via.placeholder.com/400" />
                  </ButtonBase>
              </Grid>
              <Grid item xs={8} >
                <Grid item xs container direction="column" spacing={2}>
                  <Grid item xs>
                    {/* <Typography variant="h2">
                    {data.strapiUser.username}
                    </Typography>
                    <Typography variant="h5" gutterBottom>
                      Title
                    </Typography>
                    <Typography variant="body2" style={{ cursor: 'pointer' }}>
                    Description about the author
                    </Typography> */}
                  </Grid>

                </Grid>
                <Grid item>
                  <Typography variant="subtitle1">Some info</Typography>
                </Grid>
              </Grid>
            </Grid>
          </Box>

          {/* {data.strapiUser.blogs.map(blogs => (
              <BlogCard key={blogs.id} node={blogs} path={'Blog_'}></BlogCard>
        ))} */}
        </Grid>
    </Layout>

    )
  }


// export const query = graphql`
// query UserTemplate($id:String!) {
//   strapiUser(id: { eq: $id }) {
//     id
//     username
//     blogs {
//       id
//       Title
//       Text
//       image {
//         publicURL
//       }
//       PublishDate
//     }
//   }
// }
// `