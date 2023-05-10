import React from "react";
import { useFilterStoreItem } from "@/common/hooks/useFilterStore";
import { useFilteredCollectionTags } from "@/modules/gallery/hooks/useAggregatedTags";
import TagFilter from "../../TagFilter";

const SpeciesFilter = () => {
  const { raceTags } = useFilteredCollectionTags();

  const speciesFilter = useFilterStoreItem("speciesFilter");
  const addSpeciesFilter = useFilterStoreItem("addSpeciesFilter");
  const removeSpeciesFilter = useFilterStoreItem("removeSpeciesFilter");

  return (
    <TagFilter
      name="Species"
      tagsAvailable={raceTags}
      currentSelections={speciesFilter}
      onAdd={(val) => addSpeciesFilter(val)}
      onRemove={(val) => removeSpeciesFilter(val)}
    />
  );
};

export default SpeciesFilter;
