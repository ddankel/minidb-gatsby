import useMiniatureCollection from "./useMiniatureCollection";

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
  const miniCollection = useMiniatureCollection();

  if (!miniCollection) return;

  if (slug) {
    const thisMini = miniCollection.find((item) => item.frontmatter.slug === slug);
    return extendFrontmatter(thisMini.frontmatter);
  }

  return miniCollection.map((item) => extendFrontmatter(item.frontmatter));
};

const extendFrontmatter = (frontMatter) => ({
  ...frontMatter,
  miniatureLine: [...frontMatter.line].join(" > "),
});

export default useFrontmatter;
