exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;
  const typeDefs = `
  type MarkdownRemark implements Node {
    frontmatter: Frontmatter!
  }
  type Frontmatter {
    slug: String!
    title: String
    sku: String
    name: String
    line: [String]
    painted: String
    paints: [String]
    weapons: [String]
    armor: [String]
    race: [String]
  }
  `;
  createTypes(typeDefs);
};
