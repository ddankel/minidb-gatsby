import { useStaticQuery, graphql } from "gatsby";
import Miniature from "@/common/models/Miniature";

/**
 * Fetch an array of Miniature objects for all minis in the graphql data source
 *
 * @return  {Array<Miniature>}
 */
const useMiniatureCollectionQuery = () => {
  const data = useStaticQuery(query);
  const allMinisFM = data.allMarkdownRemark.nodes;
  const allMinis = allMinisFM.map((node) => new Miniature({ frontmatter: node.frontmatter }));
  const visibleMinis = allMinis.filter((mini) => mini.isVisible);

  return visibleMinis;
};

export default useMiniatureCollectionQuery;

export const query = graphql`
  {
    allMarkdownRemark(sort: { frontmatter: { name: ASC } }) {
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
