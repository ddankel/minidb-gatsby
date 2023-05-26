import React from "react";
import { useFilteredCollectionTags } from "@/modules/gallery/hooks/useAggregatedTags";
import TagFilter from "../../TagFilter";
import { useFilterActions, useWeaponFilter } from "@/common/hooks/useFilterStore";

const WeaponFilter = () => {
  const { weaponTags } = useFilteredCollectionTags();
  const weaponFilter = useWeaponFilter();
  const { addWeaponFilter, removeWeaponFilter } = useFilterActions();

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
