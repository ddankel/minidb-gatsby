import { useEffect } from "react";
import { useCollectionActions, useEntireCollection } from "./useCollectionStore";
import useMiniatureCollectionQuery from "./useMiniatureCollectionQuery";

const usePopulateEntireCollectionStore = () => {
  const collection = useMiniatureCollectionQuery();
  const entireCollection = useEntireCollection();
  const { setEntireCollection } = useCollectionActions();

  useEffect(() => {
    if (entireCollection.length && collection.length) return;

    setEntireCollection(collection);
  }, [collection, entireCollection, setEntireCollection]);
};

export default usePopulateEntireCollectionStore;
