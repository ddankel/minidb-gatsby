import { useStaticQuery, graphql } from "gatsby";

/**
 * Fetch all of the miniatures and their frontmatter
 *
 * @return  {Array}
 */
const useMiniatureCollection = () => {
  const data = useStaticQuery(query);

  return data.allMarkdownRemark.nodes;
};

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___name], order: ASC }) {
      nodes {
        frontmatter {
          slug
          name
          line
          painted
          is_painted
          sku
          weapons
          armor
          race
        }
      }
    }
  }
`;

export default useMiniatureCollection;
