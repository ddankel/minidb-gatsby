import objectHash from "object-hash";
import { useMemo } from "react";
import { useState, useEffect, useRef } from "react";
import _ from "lodash";
import collectLines from "./collectLines";

const useAggregation = (collection) => {
  const [data, setData] = useState([]);
  const cache = useRef({});
  const collectionHash = useMemo(() => objectHash.MD5(collection), [collection]);

  useEffect(() => {
    if (!collection) return;

    if (cache.current[collectionHash]) {
      setData(cache.current[collectionHash]);
    } else {
      const result = aggregateOverCollection(collection);
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
    lines: aggregateTagSet(collectLines(collection.map((mini) => mini.lineArray))),
  };
};

const aggregateTagSet = (tagsArray) => {
  const counts = _.countBy(tagsArray.flat());
  const uniqueNames = Object.keys(counts).sort();
  return uniqueNames.map((name) => ({ name, count: counts[name] }));
};

const aggregateLineCounts = (linesArray) => {
  console.log("lA", linesArray);
  console.log("la agg", aggregateTagSet(linesArray));

  return [];
};
