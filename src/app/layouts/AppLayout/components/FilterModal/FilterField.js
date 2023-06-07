import { useFilteredCollectionTags } from "@/modules/gallery/hooks/useAggregatedTags";
import { useRef, useState, useEffect } from "react";
import { Typeahead } from "react-bootstrap-typeahead";

const FilterField = () => {
  console.log("filter field");
  const foo = useFilteredCollectionTags();
  const [selected, setSelected] = useState([]);
  const [needle, setNeedle] = useState("");

  console.log("tags", foo);

  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const options = foo.weaponTags.map((item) => ({ label: item.name, count: item.count }));
  console.log("options", options);

  return (
    <Typeahead
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
        inputRef.current.toggleMenu();
      }}
      options={options}
      placeholder="Filter"
      selected={selected}
    />
  );
};

export default FilterField;
