import { useMemo } from "react";
import useMiniatureCollection from "@/hooks/useMiniatureCollection";

import collectLines from "./collectLines";
import useDedupedArray from "./useDedupedArray";
import useFilteredCollection from "@/hooks/useFilteredCollection";

const useAggregatedTags = () => {
  const collection = useMiniatureCollection();
  // const collection = useFilteredCollection();

  const raceTags = useDedupedArray(collection.map((mini) => mini.raceTags));
  const archetypeTags = useDedupedArray(collection.map((mini) => mini.archetypeTags));
  const weaponTags = useDedupedArray(collection.map((mini) => mini.weaponTags));
  const armorTags = useDedupedArray(collection.map((mini) => mini.armorTags));
  const paintedTags = useDedupedArray(collection.map((mini) => mini.paintedState));
  const lines = useMemo(() => collectLines(collection.map((mini) => mini.lineArray)), [collection]);

  return {
    raceTags,
    archetypeTags,
    weaponTags,
    armorTags,
    paintedTags,
    lines,
  };
};

export default useAggregatedTags;
