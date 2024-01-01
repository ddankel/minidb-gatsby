import { useEffect, useRef, useState } from "react";
import { Option } from "react-bootstrap-typeahead/types/types";

import useFilterOptions from "../hooks/useFilterOptions";
import useSelectionFromFilters from "../hooks/useSelectionFromFilters";
import useUpdateFilters from "../hooks/useUpdateFilters";
import { FilterOption } from "../types/FilterOption";
import FilterResults from "./FilterResults";
import StyledTypeahead from "./StyledTypeahead";
import { TypeaheadRef } from "react-bootstrap-typeahead";

const FilterField = () => {
  const inputRef = useRef<TypeaheadRef>(null);
  const [needle, setNeedle] = useState("");
  const updateFilters = useUpdateFilters();

  useEffect(() => {
    inputRef?.current?.focus();
  }, []);

  const options = useFilterOptions();
  const currentSelection = useSelectionFromFilters(options);

  const handleChange = (newSelection: Option[]) => {
    setNeedle("");
    updateFilters(newSelection as FilterOption[]);
  };

  return (
    <StyledTypeahead
      clearButton={true}
      multiple
      ref={inputRef}
      open={needle.length > 0}
      highlightOnlyResult={true}
      id="miniature-keyboard-filter"
      onInputChange={(e) => setNeedle(e)}
      onChange={handleChange}
      options={options}
      placeholder="Filter"
      selected={currentSelection}
      renderMenuItemChildren={(option, _props, index) => {
        return <FilterResults option={option as FilterOption} key={index} />;
      }}
    />
  );
};

export default FilterField;
