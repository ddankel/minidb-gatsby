import { Miniature } from "@/common/models/Miniature";
import { graphql, useStaticQuery } from "gatsby";

type Node = {
  frontmatter: {
    slug: string;
    name: string;
    sku: string;
    line: string[];
    painted?: string;
    status?: string;
    photos: string[];
    genre?: string[];
    race?: string[];
    archetype?: string[];
    weapons?: string[];
    armor?: string[];
    recipes?: string[];
    quantity?: number;
    minidb: {
      status: string;
    };
  };
};

/**
 * Fetch an array of Miniature objects for all minis in the graphql data source
 */
const useMiniatureCollectionQuery = (): Miniature[] => {
  const data = useStaticQuery(query);
  const allMinisFM: Node[] = data.allMarkdownRemark.nodes;
  const allMinis = allMinisFM.map((fmNode) => new Miniature(fmNode.frontmatter));
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
          genre
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
