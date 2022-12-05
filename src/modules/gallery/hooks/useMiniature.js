import useMiniatureCollection from "./useMiniatureCollection";

const useMiniature = (slug) => {
  const allMiniatures = useMiniatureCollection();

  if (!slug) {
    throw new Error("useMiniature requires a slug passed in as an argument");
  }

  return allMiniatures.find((mini) => mini.slug === slug);
};
