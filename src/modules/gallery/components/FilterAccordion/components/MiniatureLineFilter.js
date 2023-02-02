import React from "react";
import { useFilterStoreItem } from "@/hooks/useFilterStore";
import { useFilteredCollectionTags } from "@/modules/gallery/hooks/useAggregatedTags";
import TagFilter from "../../TagFilter";

const MiniatureLineFilter = () => {
  const { lines } = useFilteredCollectionTags();

  const lineFilter = useFilterStoreItem("lineFilter");
  const addLineFilter = useFilterStoreItem("addLineFilter");
  const removeLineFilter = useFilterStoreItem("removeLineFilter");

  return (
    <TagFilter
      name="Line"
      tagsAvailable={lines}
      currentSelections={lineFilter}
      onAdd={(val) => addLineFilter(val)}
      onRemove={(val) => removeLineFilter(val)}
    />
  );
};

export default MiniatureLineFilter;
