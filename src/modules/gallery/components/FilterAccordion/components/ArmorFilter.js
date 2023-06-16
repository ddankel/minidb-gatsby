import { useArmorFilter, useFilterActions } from "@/common/hooks/useFilterStore";
import { useFilteredCollectionTags } from "@/common/hooks/useAggregationStore";
import TagFilter from "../../TagFilter";

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
