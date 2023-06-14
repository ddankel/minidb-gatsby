import { useFilterActions, usePaintedFilter } from "@/common/hooks/useFilterStore";
import {
  useFilteredCollectionTags,
  useWholeCollectionTags,
} from "@/modules/gallery/hooks/useAggregatedTags";
import TagFilter from "../../TagFilter";
import zipTags from "../../../utils/zipTags";

const StatusFilter = () => {
  const { paintedTags } = useFilteredCollectionTags();
  const { paintedTags: allPaintedTags } = useWholeCollectionTags();

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
