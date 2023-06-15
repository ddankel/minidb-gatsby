import { useFilterActions, usePaintedFilter } from "@/common/hooks/useFilterStore";
import { useFilteredCollectionTags } from "@/modules/gallery/hooks/useAggregatedTags";
import TagFilter from "../../TagFilter";
import zipTags from "../../../utils/zipTags";
import { useEntireCollectionTags } from "@/common/hooks/useAggregationStore";

const StatusFilter = () => {
  const { paintedTags } = useFilteredCollectionTags();
  const { paintedTags: allPaintedTags } = useEntireCollectionTags();

  const paintedFilter = usePaintedFilter();
  const { setPaintedFilter, removePaintedFilter } = useFilterActions();

  const zippedPaintedTags = zipTags(allPaintedTags, paintedTags);

  return (
    <TagFilter
      name="Species"
      tagsAvailable={zippedPaintedTags}
      currentSelections={paintedFilter}
      onAdd={(val) => setPaintedFilter([val])}
      onRemove={(val) => removePaintedFilter(val)}
    />
  );
};

export default StatusFilter;
