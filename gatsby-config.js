const exclusions = require("./vendor/miniature-data/exclusions");

module.exports = {
  siteMetadata: {
    siteUrl: "https://minidb.dankelzahn.com",
    title: "MiniDB",
  },
  plugins: [
    "gatsby-plugin-netlify",
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "minis",
        path: "./vendor/miniature-data/minis",
        ignore: [...exclusions.nonMiniDB],
      },
    },
    "gatsby-transformer-remark",
    "gatsby-plugin-styled-components",
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
