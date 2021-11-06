import * as React from "react";
import { graphql } from "gatsby";

import Miniature from "../../components/Miniature";
import PageLayout from "../../layouts/PageLayout";

export default function BlogPostTemplate({ data: { markdownRemark } }) {
  const { frontmatter, html } = markdownRemark;

  return <Miniature {...{ frontmatter, html }} />;
}

export const pageQuery = graphql`
  query ($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        name
        line
        painted
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
