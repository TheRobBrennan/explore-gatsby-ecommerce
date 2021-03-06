module.exports = {
  siteMetadata: {
    title: `[DEMO] Gatsby e-commerce`,
    description: `Let's explore Gatsby and e-commerce.`,
    author: `@therobbrennan`,
  },
  plugins: [
    'gatsby-plugin-stripe',
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-stripe`,
      options: {
        // See https://www.gatsbyjs.org/packages/gatsby-source-stripe/#supported-list-of-types for a list of values we can supply here
        objects: ['Product', 'Sku'],
        // TODO: This secret key should come from an environment variable; however this is just a test store so we can be OK with this for now
        secretKey: 'sk_test_GRsEBfERbZTngoVJNYFpvPCv00UiHERa0Q',
        downloadFiles: true,
      },
    },
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
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
