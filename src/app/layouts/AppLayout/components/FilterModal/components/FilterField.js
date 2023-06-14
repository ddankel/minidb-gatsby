import { useEffect, useRef, useState } from "react";

import useFilterOptions from "../hooks/useFilterOptions";
import useSelectionFromFilters from "../hooks/useSelectionFromFilters";
import useUpdateFilters from "../hooks/useUpdateFilters";
import FilterResults from "./FilterResults";
import StyledTypeahead from "./StyledTypeahead";

const FilterField = () => {
  const inputRef = useRef();
  const [needle, setNeedle] = useState("");
  const updateFilters = useUpdateFilters();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const options = useFilterOptions();
  const currentSelection = useSelectionFromFilters(options);

  return (
    <StyledTypeahead
      clearButton={true}
      multiple
      ref={inputRef}
      open={needle.length > 0}
      highlightOnlyResult={true}
      onFocus={(e) => e.target.select()}
      id="miniature-keyboard-filter"
      onInputChange={(e) => setNeedle(e)}
      onChange={(newSelection) => {
        setNeedle("");
        updateFilters(newSelection);
      }}
      options={options}
      placeholder="Filter"
      selected={currentSelection}
      renderMenuItemChildren={(option, _props, index) => (
        <FilterResults option={option} needle={needle} key={index} />
      )}
    />
  );
};

export default FilterField;
