import { useStaticQuery, graphql } from "gatsby";

/**
 * Retrieve the frontmatter for one or all miniatures
 *
 * If the slug is provided, only the matching miniature's frontmatter is
 * returned.  Otherwise an array of the entire collection is returned.
 *
 * @param   {String}  slug  (optional) Slug to search by
 *
 * @return  {Object, Array}
 */
const useFrontmatter = (slug) => {
  const data = useStaticQuery(query);

  if (!data) return;

  if (slug) {
    const thisMini = data.allMarkdownRemark.nodes.find((item) => item.frontmatter.slug === slug);
    return extendFrontmatter(thisMini.frontmatter);
  }

  return data.allMarkdownRemark.nodes.map((item) => extendFrontmatter(item.frontmatter));
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
          status
          sku
          weapons
          armor
          race
          recipes
        }
      }
    }
  }
`;

const extendFrontmatter = (frontMatter) => ({
  ...frontMatter,
  miniatureLine: [...frontMatter.line].join(" > "),
});

export default useFrontmatter;
