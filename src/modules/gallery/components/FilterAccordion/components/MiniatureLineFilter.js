import React from "react";
import { useFilteredCollectionTags } from "@/modules/gallery/hooks/useAggregatedTags";
import TagFilter from "../../TagFilter";
import { useFilterActions, useLineFilter } from "@/common/hooks/useFilterStore";

const MiniatureLineFilter = () => {
  const { lines } = useFilteredCollectionTags();
  const lineFilter = useLineFilter();
  const { addLineFilter, removeLineFilter } = useFilterActions();

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
