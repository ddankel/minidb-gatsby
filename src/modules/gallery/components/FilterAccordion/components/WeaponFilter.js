import React from "react";
import { useFilterStoreItem } from "@/common/hooks/useFilterStore";
import { useFilteredCollectionTags } from "@/modules/gallery/hooks/useAggregatedTags";
import TagFilter from "../../TagFilter";

const WeaponFilter = () => {
  const { weaponTags } = useFilteredCollectionTags();

  const weaponFilter = useFilterStoreItem("weaponFilter");
  const addWeaponFilter = useFilterStoreItem("addWeaponFilter");
  const removeWeaponFilter = useFilterStoreItem("removeWeaponFilter");

  return (
    <TagFilter
      name="Armor"
      tagsAvailable={weaponTags}
      currentSelections={weaponFilter}
      onAdd={(val) => addWeaponFilter(val)}
      onRemove={(val) => removeWeaponFilter(val)}
    />
  );
};

export default WeaponFilter;
