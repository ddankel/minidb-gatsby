import { useEntireCollection } from "./useCollections";

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

  return entireCollection.findMini(slug);
};

export default useMiniature;
