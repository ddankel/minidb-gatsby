exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;
  const typeDefs = `
  type MarkdownRemark implements Node {
    frontmatter: Frontmatter!
  }
  type Frontmatter {
    slug: String!
    title: String
    name: String
    line: [String]
    painted: String
    categories: [String]
    paints: [String]
    weapons: [String]
    armor: [String]
    race: [String]
  }
  `;
  createTypes(typeDefs);
};
