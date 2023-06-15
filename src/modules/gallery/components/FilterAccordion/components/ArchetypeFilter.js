import { useArchetypeFilter, useFilterActions } from "@/common/hooks/useFilterStore";
import { useFilteredCollectionTags } from "@/common/hooks/useAggregationStore";
import TagFilter from "../../TagFilter";

const ArchetypeFilter = () => {
  const { archetypeTags } = useFilteredCollectionTags();
  const archetypeFilter = useArchetypeFilter();
  const { addArchetypeFilter, removeArchetypeFilter } = useFilterActions();

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
