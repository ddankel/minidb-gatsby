import {
  useFilteredCollectionTags,
  useFilteredCollectionZippedTags,
} from "@/modules/gallery/hooks/useAggregatedTags";
import { useRef, useState, useEffect } from "react";
import { Typeahead, Token } from "react-bootstrap-typeahead";
import { startCase, last } from "lodash";
import useFilterOptions from "./useFilterOptions";
import useUpdateFilters from "./useUpdateFilters";
import useSelectionFromFilters from "./useSelectionFromFilters";
import styled from "styled-components";
import { useFilterActions } from "@/common/hooks/useFilterStore";

const Match = styled.span.attrs({
  className: "bg-primary",
})``;

const FilterResults = ({ option }) => {
  console.log("OPTION", option);

  const formattedValue = option.value
    .split(" > ")
    .map((segment) => startCase(segment))
    .join(" > ");

  return (
    <span>
      {startCase(option.type)}: {formattedValue} (TODO COUNT)
    </span>
  );
};

const FilterField = () => {
  console.log("rendering filter field");
  const inputRef = useRef();

  const [selected, setSelected] = useState([]);
  const [needle, setNeedle] = useState("");
  const updateFilters = useUpdateFilters();

  // TODO: on change, update filters

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const doUpdate = (selection) => {
    console.log("NOW TO UPDATE", selection);
  };

  const options = useFilterOptions();
  const selectionFromFilters = useSelectionFromFilters(options);

  return (
    <Typeahead
      // labelKey={(option) =>
      //   `${startCase(option.type)}: ${startCase(option.value)} (${option.count})`
      // }
      multiple
      ref={inputRef}
      open={needle.length > 0}
      highlightOnlyResult={true}
      onFocus={(e) => e.target.select()}
      id="filter miniatures"
      onInputChange={(e) => setNeedle(e)}
      onChange={(newSelection) => {
        console.log("new selection", newSelection);
        setSelected(newSelection);
        setNeedle("");
        doUpdate(newSelection);
        updateFilters(newSelection);
      }}
      options={options}
      placeholder="Filter"
      // selected={selected}
      selected={selectionFromFilters}
      renderMenuItemChildren={(option, _props, index) => (
        <FilterResults option={option} needle={needle} key={index} />
      )}

      // renderToken={(option, props, idx) => {
      //   console.log("render options", props.onRemove);

      //   return (
      //     <Token
      //       disabled={props.disabled}
      //       // onRemove={(val) => console.log("remove", val)}
      //       onRemove={props.onRemove}
      //       key={idx}
      //     >
      //       {/* {startCase(last(option.label.split(": ")))} */}
      //       {startCase(option.value)}
      //     </Token>
      //   );
      // }}
    />
  );
};

export default FilterField;
