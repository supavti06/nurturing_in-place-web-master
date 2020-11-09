import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import { sidebar } from '../pages/index'
import { makeStyles } from '@material-ui/core/styles';
import Sidebar from '../components/sidebar'
import Grid from '@material-ui/core/Grid';
import Main from '../components/main';

const useStyles = makeStyles(theme => ({
  root: {
  //   flexGrow: 1,
  },
  side: {
      height: '50%',
      backgroundColor: 'blue',

  },
  hightlights: {
  },
  storiesClass: {
      // marginTop: "20px"
  },
}));


export default function  CategoryTemplate({ data }) {
  const classes = useStyles();
  return(
    <Layout>

      <Grid container spacing={5} className={classes.mainGrid}>
         <Grid item xs={12} md={8}>
  {/* <h1>{data.strapiBlog.Title}</h1><p>{data.strapiBlog.PublishDate}</p> */}
          {/* <p>by <Link to={`/users/User_${data.strapiBlog.user.id}`}>{data.strapiBlog.user.username}</Link></p> */}
          {/* <img
            src={data.strapiBlog.image.publicURL}
            alt={data.strapiBlog.image.publicURL}
            height="300"
          /> */}
        {/* <p>{data.allStrapiBlog}</p> */}

           </Grid>
           <Main title={data.strapiCategory.Name} data={data.allStrapiBlog.edges}/>
            <Sidebar
              title={sidebar.title}
              description={sidebar.description}
              social={sidebar.social}
              suggestedContent={[]}
              />
          </Grid>

    </Layout>
  )
}

// export const query = graphql`
//     query CategoryTemplate($Name: String!) {
//       strapiCategory(Name: {eq: $Name}) {
//         Name
//       }
//       allStrapiBlog(filter: {categories: {elemMatch: {Name: {eq:$Name }}}}){
//         edges {
//           node {
//             Title
//             Text
//             id
//             image {
//               publicURL
//             }
//             PublishDate
//             categories {
//               id
//               Name
//             }
//           }
//         }
//       }
//     }
// `