import { useStaticQuery, graphql } from "gatsby";
import { isPublishedOnMiniDB } from "../../vendor/miniature-data/filters";

/**
 * Fetch all of the miniatures and their frontmatter
 *
 * @return  {Array}
 */
const useMiniatureCollection = () => {
  const data = useStaticQuery(query);
  const allMiniatures = data.allMarkdownRemark.nodes;
  return allMiniatures.filter((node) => isPublishedOnMiniDB(node.frontmatter));
};

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___name], order: ASC }) {
      nodes {
        frontmatter {
          slug
          name
          sku
          line
          painted
          status
          race
          archetype
          weapons
          armor
          recipes
          quantity
          minidb {
            status
          }
        }
      }
    }
  }
`;

export default useMiniatureCollection;
