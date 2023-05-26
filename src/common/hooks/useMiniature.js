import { useEntireCollection } from "./useCollectionStore";

/**
 * Fetch an pre-populated instance of the Miniature model that matches the provided slug
 *
 * @param   {String}  slug  The slug of the miniature to fetch
 *
 * @return  {Miniature}
 */
const useMiniature = (slug) => {
  const entireCollection = useEntireCollection();

  if (!slug) {
    throw new Error("useMiniature requires a slug passed in as an argument");
  }

  return entireCollection.find((mini) => mini.slug === slug);
};

export default useMiniature;
