export const findAdjacentMinis = (allMinis, currentSlug) => {
  const count = allMinis.length;
  const thisIndex = allMinis.findIndex((item) => item.frontmatter.slug === currentSlug);
  const prevIndex = (thisIndex + count - 1) % count;
  const nextIndex = (thisIndex + 1) % count;

  const prevMini = allMinis[prevIndex].frontmatter;
  const nextMini = allMinis[nextIndex].frontmatter;

  return { prevMini, nextMini };
};
