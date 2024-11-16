import path from "path";

import { CreatePagesArgs, CreateSchemaCustomizationArgs } from "gatsby";

const Miniature = require("./src/common/models/Miniature").Miniature;

exports.createSchemaCustomization = ({ actions }: CreateSchemaCustomizationArgs) => {
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

type PageResponseData = {
  allMarkdownRemark: {
    nodes: {
      frontmatter: {
        slug: string;
        minidb: {
          status: string;
        };
      };
      html: string;
    }[];
  };
};

exports.createPages = async function ({ actions, graphql }: CreatePagesArgs) {
  const { data } = await graphql<PageResponseData>(`
    query {
      allMarkdownRemark {
        nodes {
          frontmatter {
            slug
            minidb {
              status
            }
          }
          html
        }
      }
    }
  `);

  if (!data) return;

  data.allMarkdownRemark.nodes.forEach((node) => {
    const { frontmatter, html } = node;
    const miniature = new Miniature(frontmatter, html);

    if (!miniature.isVisible) return;

    actions.createPage({
      path: `minis/${miniature.slug}`,
      component: path.resolve(`./src/templates/MiniaturePageTemplate.tsx`),
      context: { slug: miniature.slug },
    });
  });
};
