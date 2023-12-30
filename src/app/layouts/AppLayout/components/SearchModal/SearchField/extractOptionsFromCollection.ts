import { Collection } from "@/common/models/Collection";
import { SearchOption } from "../types/SearchOption";

const extractOptionsFromCollection = (collection: Collection): SearchOption[] => {
  const collectionArray = collection.toArray();
  return collectionArray.map((miniature) => ({
    id: miniature.slug,
    label: miniature.displayName,
  }));
};
export default extractOptionsFromCollection;
