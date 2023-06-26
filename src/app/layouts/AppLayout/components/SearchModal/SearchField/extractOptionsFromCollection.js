const extractOptionsFromCollection = (collection) => {
  const collectionArray = collection.toArray();
  return collectionArray.map((miniature) => ({
    id: miniature.slug,
    label: miniature.displayName,
  }));
};
export default extractOptionsFromCollection;
