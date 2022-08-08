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
