require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: `Ori Perelman - Web Developer`,
    description: `Self taught, full stack web developer located in Tel-Aviv, Israel`,
    author: `Ori Perelman`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
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
        background_color: `#090a16`,
        theme_color: `#FF3D00`,
        display: `minimal-ui`,
        icon: `src/assets/images/my-fav.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-webpack-bundle-analyser-v2`,
      options: {
        disable: true,
      },
    },
    `gatsby-plugin-material-ui`,
    'gatsby-plugin-loadable-components-ssr',
    {
      resolve: 'gatsby-plugin-ackee-tracker',
      options: {
        // Domain ID found when adding a domain in the admin panel.
        domainId: process.env.ACKEE_DOMAIN_ID,
        // URL to Server eg: "https://analytics.test.com".
        server: process.env.ACKEE_SERVER,
        // Disabled analytic tracking when running locally
        ignoreLocalhost: process.env.NODE_ENV === 'production',
        // Enable or disable the tracking of your own visits (as identified by your login to the Ackee dashboard).
        ignoreOwnVisits: process.env.NODE_ENV === 'production',
        // If enabled it will collect info on OS, BrowserInfo, Device  & ScreenSize
        detailed: true,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
