import { useArmorFilter, useFilterActions } from "@/common/stores/useFilterStore";
import { useFilteredCollectionTagIndex } from "@/common/hooks/useTagIndex";
import TagFilter from "../../TagFilter";

const ArmorFilter = () => {
  const { armorTags } = useFilteredCollectionTagIndex();
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
