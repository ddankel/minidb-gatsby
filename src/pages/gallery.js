import * as React from "react";
import { graphql } from "gatsby";

export const query = graphql`
  query {
    allMarkdownRemark {
      nodes {
        frontmatter {
          title
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
  console.log(data);

  return (
    <div>
      <div>DATA!</div>

      {data.allMarkdownRemark.nodes.map((mini, index) => {
        return (
          <div key={index}>
            <h2>{mini.frontmatter.title}</h2>
          </div>
        );
      })}
    </div>
  );
};

export default HomePage;
