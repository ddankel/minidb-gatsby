const Miniature = require("./src/models/Miniature");

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;
  const typeDefs = `
  type MarkdownRemark implements Node @infer {
    frontmatter: Frontmatter!
  }

  type Frontmatter implements Node {
    slug: String!
    name: String!
    sku: String
    line: [String]
    painted: String
    status: String
    race: [String]
    archetype: [String]
    weapons: [String]
    armor: [String]
    recipes: [String]
    quantity: Int
    minidb: MiniDB
  }

  type MiniDB implements Node @infer {
    status: String
  }
  `;
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
    const miniature = new Miniature({ frontmatter, html });

    if (!miniature.isVisible) return;

    actions.createPage({
      path: `minis/${miniature.slug}`,
      component: require.resolve(`./src/templates/MiniaturePageTemplate.js`),
      context: { slug: miniature.slug },
    });
  });
};
