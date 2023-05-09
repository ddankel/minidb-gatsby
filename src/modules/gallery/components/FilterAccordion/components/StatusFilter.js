import React from "react";
import { useFilterStoreItem } from "@/common/hooks/useFilterStore";
import {
  useFilteredCollectionTags,
  useWholeCollectionTags,
} from "@/modules/gallery/hooks/useAggregatedTags";
import TagFilter from "../../TagFilter";
import zipTags from "../zipTags";

const StatusFilter = () => {
  const { paintedTags } = useFilteredCollectionTags();
  const { paintedTags: allPaintedTags } = useWholeCollectionTags();

  const zippedPaintedTags = zipTags(allPaintedTags, paintedTags);

  const paintedFilter = useFilterStoreItem("paintedFilter");
  const setPaintedFilter = useFilterStoreItem("setPaintedFilter");
  const removePaintedFilter = useFilterStoreItem("removePaintedFilter");

  return (
    <TagFilter
      name="Species"
      tagsAvailable={zippedPaintedTags}
      currentSelections={paintedFilter}
      onAdd={(val) => setPaintedFilter([val])}
      onRemove={(val) => removePaintedFilter(val)}
    />
  );
};

export default StatusFilter;
