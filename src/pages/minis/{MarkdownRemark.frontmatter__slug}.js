import * as React from "react";
import { graphql } from "gatsby";
import { Helmet } from "react-helmet";

import Miniature from "../../components/Miniature";

export default function BlogPostTemplate({ data: { markdownRemark } }) {
  const { frontmatter, html } = markdownRemark;

  return (
    <>
      <Helmet>
        <title>{frontmatter.sku || frontmatter.name} | MiniDB</title>
      </Helmet>
      <Miniature {...{ frontmatter, html }} />
    </>
  );
}

export const pageQuery = graphql`
  query ($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        name
        line
        painted
        sku
        photos {
          publicURL
          childImageSharp {
            gatsbyImageData(width: 400, aspectRatio: 1, formats: [AUTO])
          }
        }
        weapons
        armor
        race
      }
    }
  }
`;
