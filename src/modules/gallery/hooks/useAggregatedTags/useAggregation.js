import objectHash from "object-hash";
import { useMemo } from "react";
import { useState, useEffect, useRef } from "react";
import _ from "lodash";

const useAggregation = (collection) => {
  const [data, setData] = useState([]);
  const cache = useRef({});
  const collectionHash = useMemo(() => objectHash.MD5(collection), [collection]);

  useEffect(() => {
    if (!collection) return;

    if (cache.current[collectionHash]) {
      setData(cache.current[collectionHash]);
    } else {
      console.log("re calcing", collection);
      const result = aggregateOverCollection(collection);
      console.log("res ", result);

      cache.current[collectionHash] = result;
      setData("setting data", result);
    }
  }, [collection]);

  return data;
};

export default useAggregation;

const aggregateOverCollection = (collection) => {
  return {
    raceTags: aggregateTagSet(collection.map((mini) => mini.raceTags)),
    archetypeTags: aggregateTagSet(collection.map((mini) => mini.archetypeTags)),
    weaponTags: aggregateTagSet(collection.map((mini) => mini.weaponTags)),
    armorTags: aggregateTagSet(collection.map((mini) => mini.armorTags)),
    paintedTags: aggregateTagSet(collection.map((mini) => mini.paintedState)),
  };
};

const aggregateTagSet = (tagsArray) => {
  const counts = _.countBy(tagsArray.flat());
  const uniqueNames = Object.keys(counts).sort();
  return uniqueNames.map((name) => ({ name, count: counts[name] }));
};
