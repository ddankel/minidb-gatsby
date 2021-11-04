import * as React from "react";
import { graphql, Link } from "gatsby";

export const query = graphql`
  query {
    allMarkdownRemark {
      nodes {
        frontmatter {
          slug
          name
          line
          categories
          photos {
            publicURL
          }
          weapons
          armor
          race
        }
      }
    }
  }
`;

const HomePage = ({ data }) => {
  return (
    <div>
      <div>DATA!</div>

      {data.allMarkdownRemark.nodes.map((mini, index) => {
        return (
          <div key={index}>
            <h2>{mini.frontmatter.name}</h2>
            <Link to={`/minis/${mini.frontmatter.slug}`}>{mini.frontmatter.name}</Link>
          </div>
        );
      })}
    </div>
  );
};

export default HomePage;
