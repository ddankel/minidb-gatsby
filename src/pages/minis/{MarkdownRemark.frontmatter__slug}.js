import * as React from "react";
import { graphql } from "gatsby";
import { Helmet } from "react-helmet";

import MiniaturePage from "../../components/MiniaturePage";

export const pageQuery = graphql`
  query ($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        slug
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
        is_painted
      }
    }
  }
`;

const MiniaturePageTemplate = ({ data }) => {
  const { frontmatter, html } = data.markdownRemark;

  return (
    <>
      <Helmet>
        <title>{frontmatter.sku || frontmatter.name} | MiniDB</title>
      </Helmet>
      <MiniaturePage {...{ frontmatter, html }} />
    </>
  );
};
export default MiniaturePageTemplate;
