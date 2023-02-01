const miniExclusions = require("./vendor/miniature-data/exclusions");

module.exports = {
  siteMetadata: {
    siteUrl: "https://minidb.dankelzahn.com",
    title: "MiniDB",
  },
  trailingSlash: "always",
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
        ignore: [...miniExclusions],
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
    {
      resolve: "gatsby-plugin-alias-imports",
      options: {
        alias: {
          "@/components": "src/components",
          "@/hooks": "src/hooks",
          "@/models": "src/models",
          "@/modules": "src/modules",
          "@/styles": "src/styles",
        },
        extensions: ["js"],
      },
    },
  ],
};
