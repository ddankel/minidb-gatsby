import { graphql } from "gatsby";

import AppLayout from "@/app/layouts/AppLayout";
import Miniature from "@/common/models/Miniature";
import MiniaturePageContent from "@/modules/miniature/content/MiniaturePageContent";

const MiniaturePageTemplate = ({ data }) => {
  const { frontmatter, html } = data.markdownRemark;

  return (
    <AppLayout variant="narrow">
      <MiniaturePageContent frontmatter={frontmatter} html={html} />
    </AppLayout>
  );
};
export default MiniaturePageTemplate;

/**
 * Gatsby Head component
 */
export const Head = ({ data }) => {
  const { frontmatter, html } = data.markdownRemark;
  const miniature = new Miniature({ frontmatter, html });

  return <title>{miniature.displayName} | MiniDB</title>;
};

/**
 * Gatsby page query
 */
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
        genre
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
