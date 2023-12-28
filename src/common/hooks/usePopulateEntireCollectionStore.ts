import { useEffect } from "react";
import { useCollectionActions, useEntireCollectionData } from "../stores/useCollectionStore";
import useMiniatureCollectionQuery from "./useMiniatureCollectionQuery";

const usePopulateEntireCollectionStore = () => {
  const collection = useMiniatureCollectionQuery();
  const entireCollectionData = useEntireCollectionData();
  const { setEntireCollection } = useCollectionActions();

  useEffect(() => {
    if (entireCollectionData.length && collection.length) return;

    setEntireCollection(collection);
  }, [collection, entireCollectionData, setEntireCollection]);
};

export default usePopulateEntireCollectionStore;
