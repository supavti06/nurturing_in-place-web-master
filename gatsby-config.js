module.exports = {
  siteMetadata: {
    title: `Nurturing In Place`,
    description: `Your guide to staying happy and healthy during the pandemic`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet-async`,
    {
      resolve: `gatsby-plugin-facebook-pixel`,
      options: {
        pixelId: '690251911732572',
      },
    },    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-164617607-1",
      },
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        custom: {
          families: ['Josefin Sans'],
        }
      }
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    // {
    //   resolve: 'gatsby-source-strapi',
    //   options: {
    //     apiURL: 'http://54.185.157.195:1337',
    //     contentTypes: [ // List of the Content Types you want to be able to request from Gatsby.
    //       'blog',
    //       'user',
    //       'category',
    //     ],
    //     queryLimit: 1000,
    //   },
    // },

    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/nurturing-logo-small.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-material-ui`,
      options: {
        stylesProvider: {
          injectFirst: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        // Add any options here
      },
    },
    `gatsby-plugin-offline`,
  ],
}
