import React, { useMemo } from "react";
import {
  useFilteredCollectionTags,
  useWholeCollectionTags,
} from "@/modules/gallery/hooks/useAggregatedTags";
import TagFilter from "../../TagFilter";
import { useFilterActions, useLineFilter } from "@/common/hooks/useFilterStore";

const MiniatureLineFilter = () => {
  const { lines } = useFilteredCollectionTags();
  const lineFilter = useLineFilter();
  const { addLineFilter, removeLineFilter, setLineFilter } = useFilterActions();
  const { lines: allLines } = useWholeCollectionTags();

  console.log("all line tags", allLines);

  const visibleLines = useMemo(() => {
    if (!lines) return;

    if (!lineFilter.length) {
      const isTopLevel = (line) => line.name.split(">").length === 1;
      return lines.filter((line) => isTopLevel(line));
    } else {
      console.log("else");

      return allLines.filter((line) => {
        console.log(
          "checking line",
          line.name,
          "|",
          lineFilter[0],
          "|",
          lineFilter[0].split(" > ")[0]
        );

        return line.name.startsWith(lineFilter[0].split(" > ")[0]);
      });
    }
  }, [lines, lineFilter]);

  console.log("lineFilter", lineFilter);
  console.log("visibleLines", visibleLines);

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
