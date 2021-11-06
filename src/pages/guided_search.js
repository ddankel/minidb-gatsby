import * as React from "react";
import { graphql } from "gatsby";
import GuidedSearch from "../components/GuidedSearch";
import PageLayout from "../layouts/PageLayout";

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___name], order: ASC }) {
      nodes {
        frontmatter {
          slug
          name
          line
          photos {
            publicURL
            childImageSharp {
              gatsbyImageData(width: 100, quality: 80, aspectRatio: 1, formats: [AUTO])
            }
          }
          weapons
          armor
          race
          is_painted
        }
      }
    }
  }
`;

const HomePage = ({ data }) => {
  return (
    <PageLayout>
      <GuidedSearch minis={data.allMarkdownRemark.nodes} />
    </PageLayout>
  );
};

export default HomePage;
