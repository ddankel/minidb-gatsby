import { useArchetypeFilter, useFilterActions } from "@/common/stores/useFilterStore";
import { useFilteredCollectionTagIndex } from "@/common/hooks/useTagIndex";
import TagFilter from "../../TagFilter";

const ArchetypeFilter = () => {
  const { archetypeTags } = useFilteredCollectionTagIndex();
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
