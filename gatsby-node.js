exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;
  const typeDefs = `
  type MarkdownRemark implements Node @infer {
    frontmatter: Frontmatter!
  }
  type Frontmatter @infer {
    slug: String!
    title: String
    sku: String
    name: String
    line: [String]
    painted: String
    weapons: [String]
    armor: [String]
    race: [String]
    recipes: [String]
    status: String
  }
  `;
  createTypes(typeDefs);
};
