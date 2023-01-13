import React from "react";
import { useFilterStoreItem } from "@/hooks/useFilterStore";
import { useFilteredCollectionTags } from "@/modules/gallery/hooks/useAggregatedTags";
import TagFilter from "../../TagFilter";

const ArchetypeFilter = () => {
  const { archetypeTags } = useFilteredCollectionTags();

  const archetypeFilter = useFilterStoreItem("archetypeFilter");
  const addArchetypeFilter = useFilterStoreItem("addArchetypeFilter");
  const removeArchetypeFilter = useFilterStoreItem("removeArchetypeFilter");

  return (
    <TagFilter
      name="Archtype"
      tagsAvailable={archetypeTags}
      currentSelections={archetypeFilter}
      onAdd={(val) => addArchetypeFilter(val)}
      onRemove={(val) => removeArchetypeFilter(val)}
    />
  );
};

export default ArchetypeFilter;
