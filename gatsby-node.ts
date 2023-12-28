import path from "path";

const Miniature = require("./src/common/models/Miniature");

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;
  const typeDefs = [
    `type MarkdownRemark implements Node @dontInfer {
      frontmatter: Frontmatter!
    }`,

    `type Frontmatter implements Node @dontInfer {
      slug: String!
      name: String!
      sku: String
      line: [String]
      painted: String
      status: String
      genre: [String]
      race: [String]
      archetype: [String]
      weapons: [String]
      armor: [String]
      recipes: [String]
      quantity: Int
      minidb: MiniDB
      photos: [File!]! @fileByRelativePath
    }`,

    `type MiniDB implements Node @infer {
      status: String
    }`,
  ];
  createTypes(typeDefs);
};

exports.createPages = async function ({ actions, graphql }) {
  const { data } = await graphql(`
    query {
      allMarkdownRemark {
        nodes {
          frontmatter {
            slug
            minidb {
              status
            }
          }
        }
      }
    }
  `);

  data.allMarkdownRemark.nodes.forEach((node) => {
    const { frontmatter, html } = node;
    const miniature = new Miniature(frontmatter, html);

    if (!miniature.isVisible) return;

    actions.createPage({
      path: `minis/${miniature.slug}`,
      component: path.resolve(`./src/templates/MiniaturePageTemplate.js`),
      context: { slug: miniature.slug },
    });
  });
};
