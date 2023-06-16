import { useMemo } from "react";

import { useFilterActions, useLineFilter } from "@/common/hooks/useFilterStore";
import { useFilteredCollectionTags } from "@/common/hooks/useAggregationStore";

import TagFilter from "../../TagFilter";
import { useEntireCollectionTags } from "@/common/hooks/useAggregationStore";

const MiniatureLineFilter = () => {
  const { lines } = useFilteredCollectionTags();
  const lineFilter = useLineFilter();
  const { removeLineFilter, setLineFilter } = useFilterActions();
  const { lines: allLines } = useEntireCollectionTags();

  const visibleLines = useMemo(() => {
    // If the lines haven't been collected, an empty array
    if (!lines) return [];

    if (!lineFilter.length) {
      // If there's at least one line, show it and any other lines under the
      // same "top level" line.  IE if "Reaper Miniatures > Bones" is selected,
      // show any lines that start with "Reaper Miniatures"
      const isTopLevel = (line) => line.name.split(">").length === 1;
      return lines.filter(isTopLevel);
    } else {
      // If there are no selected filters, only show "top level" lines.
      // IE show "Privateer Press" but not "Privateer Press > Mecenaries"
      const sharesParentWithCurrent = (line) => line.name.startsWith(lineFilter[0].split(" > ")[0]);
      return allLines.filter(sharesParentWithCurrent);
    }
  }, [allLines, lines, lineFilter]);

  return (
    <TagFilter
      name="Line"
      tagsAvailable={visibleLines}
      currentSelections={lineFilter}
      onAdd={(val) => setLineFilter(val)}
      onRemove={(val) => removeLineFilter(val)}
    />
  );
};

export default MiniatureLineFilter;
