module.exports = {
  siteMetadata: {
    siteUrl: "https://minidb.dankelzahn.com",
    title: "MiniDB",
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    // {
    //   resolve: "gatsby-source-filesystem",
    //   options: {
    //     name: "images",
    //     path: "./src/images/",
    //   },
    //   __key: "images",
    // },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "minis",
        path: "./src/minis",
      },
    },
    "gatsby-transformer-remark",
    "gatsby-plugin-styled-components",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        sitemap: null,
        host: null,
        policy: [{ userAgent: "*", disallow: "/" }],
      },
    },
  ],
};
