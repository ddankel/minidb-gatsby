import Miniature from "@/models/Miniature";
import { useStaticQuery, graphql } from "gatsby";

const useMiniatureCollection = () => {
  const data = useStaticQuery(query);
  const allMinisFM = data.allMarkdownRemark.nodes;
  const allMinis = allMinisFM.map((node) => new Miniature({ frontmatter: node.frontmatter }));
  const visibleMinis = allMinis.filter((mini) => mini.isVisible);

  return visibleMinis;
};

export default useMiniatureCollection;

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
