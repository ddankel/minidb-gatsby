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
          }
        }
      }
    }
  `);

  // TODO: exclude based on frontmatter
  // TODO: create exclusion function that accepts frontmatter as an argument and returns if the function is excluded/included.  Put this function in the submodule and include it.
  // TODO: update useMinatureCollection hook with similar exclusion
  // TODO: useMiniatureCollection exclusion should be defined in submodule.  String to inject in graphql?

  data.allMarkdownRemark.nodes.forEach((node) => {
    const slug = node.frontmatter.slug;
    actions.createPage({
      path: `m/${slug}`,
      component: require.resolve(`./src/templates/MiniaturePage.js`),
      context: { slug: slug },
    });
  });
};
