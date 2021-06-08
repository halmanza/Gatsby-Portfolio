module.exports = {
  siteMetadata: {
    title: "almanza-blog",
  },
  plugins: [
    "gatsby-transformer-remark",
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/src/projects/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `thumbs`,
        path: `${__dirname}/src/images/thumbs`,
      },
    }
  ],
  siteMetadata: {
    title: "Anthony/Almanza",
    description: "Arizona Based Developer ",
    copyright: "Copyright 2021",
    contact: "anthony@webdev.com"
  },
};
