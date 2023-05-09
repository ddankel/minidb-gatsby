import React from "react";
import { useFilterStoreItem } from "@/common/hooks/useFilterStore";
import { useFilteredCollectionTags } from "@/modules/gallery/hooks/useAggregatedTags";
import TagFilter from "../../TagFilter";

const ArmorFilter = () => {
  const { armorTags } = useFilteredCollectionTags();

  const armorFilter = useFilterStoreItem("armorFilter");
  const addArmorFilter = useFilterStoreItem("addArmorFilter");
  const removeArmorFilter = useFilterStoreItem("removeArmorFilter");

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
