module.exports = {
  siteMetadata: {
    title: "almanza-blog",
  },
  plugins: [
    "gatsby-transformer-remark",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/src/projects/`,
      },
    },
  ],
  siteMetadata: {
    title: "Anthony/Almanza",
    description: "Arizona Based Developer ",
    copyright: "Copyright 2021",
    contact: "anthony@webdev.com"
  },
};
