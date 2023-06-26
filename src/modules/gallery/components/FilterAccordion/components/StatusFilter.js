import { useFilterActions, usePaintedFilter } from "@/common/hooks/useFilterStore";
import { useZippedCollectionTagIndex } from "@/common/hooks/useTagIndex";
import TagFilter from "../../TagFilter";

const StatusFilter = () => {
  const { statusTags: zippedStatusTags } = useZippedCollectionTagIndex();
  const paintedFilter = usePaintedFilter();
  const { setPaintedFilter, removePaintedFilter } = useFilterActions();

  return (
    <TagFilter
      name="Species"
      tagsAvailable={zippedStatusTags}
      currentSelections={paintedFilter}
      onAdd={(val) => setPaintedFilter([val])}
      onRemove={(val) => removePaintedFilter(val)}
    />
  );
};

export default StatusFilter;
