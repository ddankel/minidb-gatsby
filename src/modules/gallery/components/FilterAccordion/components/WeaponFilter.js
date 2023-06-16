import { useFilterActions, useWeaponFilter } from "@/common/hooks/useFilterStore";
import { useFilteredCollectionTags } from "@/common/hooks/useAggregationStore";
import TagFilter from "../../TagFilter";

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
