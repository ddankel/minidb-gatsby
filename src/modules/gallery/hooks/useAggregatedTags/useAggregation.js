import { useState, useEffect, useMemo } from "react";
import objectHash from "object-hash";
import _ from "lodash";

import collectLines from "./collectLines";
import useAggregatedTagStore from "../useAggregatedTagStore";

const useAggregation = (collection) => {
  const [data, setData] = useState([]);
  const writeCache = useAggregatedTagStore((store) => store.writeCache);
  const readValue = useAggregatedTagStore((store) => store.readValue);
  const collectionHash = useMemo(() => objectHash.MD5(collection), [collection]);

  useEffect(() => {
    if (!collection) return;

    const cachedValue = readValue(collectionHash);

    if (cachedValue) {
      setData(cachedValue);
    } else {
      const result = aggregateOverCollection(collection);
      writeCache(collectionHash, result);
      setData(result);
    }
  }, [collection, collectionHash, readValue, writeCache]);

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
    lines: aggregateTagSet(collectLines(collection.map((mini) => mini.lineArray))),
  };
};

const aggregateTagSet = (tagsArray) => {
  const counts = _.countBy(tagsArray.flat());
  const uniqueNames = Object.keys(counts).sort();
  return uniqueNames.map((name) => ({ name, count: counts[name] }));
};
