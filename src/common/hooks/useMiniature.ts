import { useEntireCollection } from "./useCollections";

/**
 * Fetch an pre-populated instance of the Miniature model that matches the provided slug
 */
const useMiniature = (slug: string) => {
  const entireCollection = useEntireCollection();

  return entireCollection.findMini(slug);
};

export default useMiniature;
