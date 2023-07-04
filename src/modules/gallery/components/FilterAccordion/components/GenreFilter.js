import { useGenreFilter, useFilterActions } from "@/common/hooks/useFilterStore";
import { useFilteredCollectionTagIndex } from "@/common/hooks/useTagIndex";
import TagFilter from "../../TagFilter";

const GenreFilter = () => {
  const { genreTags } = useFilteredCollectionTagIndex();
  const genreFilter = useGenreFilter();
  const { addGenreFilter, removeGenreFilter } = useFilterActions();

  return (
    <TagFilter
      name="Genre"
      tagsAvailable={genreTags}
      currentSelections={genreFilter}
      onAdd={(val) => addGenreFilter(val)}
      onRemove={(val) => removeGenreFilter(val)}
    />
  );
};

export default GenreFilter;
