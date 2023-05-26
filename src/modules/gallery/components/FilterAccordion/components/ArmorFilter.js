import React from "react";
import { useFilteredCollectionTags } from "@/modules/gallery/hooks/useAggregatedTags";
import TagFilter from "../../TagFilter";
import { useArmorFilter, useFilterActions } from "@/common/hooks/useFilterStore";

const ArmorFilter = () => {
  const { armorTags } = useFilteredCollectionTags();
  const armorFilter = useArmorFilter();
  const { addArmorFilter, removeArmorFilter } = useFilterActions();

  return (
    <TagFilter
      name="Armor"
      tagsAvailable={armorTags}
      currentSelections={armorFilter}
      onAdd={(val) => addArmorFilter(val)}
      onRemove={(val) => removeArmorFilter(val)}
    />
  );
};

export default ArmorFilter;
