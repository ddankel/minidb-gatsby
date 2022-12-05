export const findAdjacentMinis = (allMinis, currentSlug) => {
  const count = allMinis.length;
  const thisIndex = allMinis.findIndex((mini) => mini.slug === currentSlug);
  const prevIndex = (thisIndex + count - 1) % count;
  const nextIndex = (thisIndex + 1) % count;

  const prevMini = allMinis[prevIndex];
  const nextMini = allMinis[nextIndex];

  return { prevMini, nextMini };
};
