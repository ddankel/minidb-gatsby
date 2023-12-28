import { useFilterActions, useSpeciesFilter } from "@/common/stores/useFilterStore";
import { useFilteredCollectionTagIndex } from "@/common/hooks/useTagIndex";
import TagFilter from "../../TagFilter";

const SpeciesFilter = () => {
  const { speciesTags } = useFilteredCollectionTagIndex();
  const speciesFilter = useSpeciesFilter();
  const { addSpeciesFilter, removeSpeciesFilter } = useFilterActions();

  return (
    <TagFilter
      name="Species"
      tagsAvailable={speciesTags}
      currentSelections={speciesFilter}
      onAdd={(val) => addSpeciesFilter(val)}
      onRemove={(val) => removeSpeciesFilter(val)}
    />
  );
};

export default SpeciesFilter;
