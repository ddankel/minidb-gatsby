import { useFilterActions, useWeaponFilter } from "@/common/stores/useFilterStore";
import TagFilter from "../../TagFilter";
import { useFilteredCollectionTagIndex } from "@/common/hooks/useTagIndex";

const WeaponFilter = () => {
  const { weaponTags } = useFilteredCollectionTagIndex();
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
