import * as React from "react";
import { graphql } from "gatsby";

import MiniaturePage from "../components/MiniaturePage";
import AppLayout from "../layouts/AppLayout";
import Miniature from "../models/Miniature";

export const pageQuery = graphql`
  query ($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
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
            gatsbyImageData(
              width: 400
              aspectRatio: 1
              formats: [AUTO]
              placeholder: BLURRED
              transformOptions: { cropFocus: NORTH }
            )
          }
        }
        race
        archetype
        weapons
        armor
        status
        recipes
        quantity
        minidb {
          status
        }
      }
    }
  }
`;

const MiniaturePageTemplate = ({ data }) => {
  const { frontmatter, html } = data.markdownRemark;

  const mini = new Miniature({ frontmatter, html });
  console.log("Mini", mini, mini.isDraft, mini.isPublished, mini.displayName);

  return (
    <AppLayout variant="narrow">
      <MiniaturePage {...{ frontmatter, html }} />
    </AppLayout>
  );
};
export default MiniaturePageTemplate;

export const Head = ({ data }) => {
  const frontmatter = data.markdownRemark.frontmatter;

  return <title>{frontmatter?.sku || frontmatter?.name} | MiniDB</title>;
};
