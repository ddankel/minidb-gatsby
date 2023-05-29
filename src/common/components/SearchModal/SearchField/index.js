import { navigate } from "gatsby";
import { useEffect, useRef, useState } from "react";
import { Typeahead } from "react-bootstrap-typeahead";

import { useEntireCollection } from "@/common/hooks/useCollectionStore";
import SearchResult from "../SearchResult";

const navigateTo = (selection) => navigate(`/minis/${selection.id}`);

const SearchField = () => {
  const inputRef = useRef();
  const entireCollection = useEntireCollection();
  const [searchNeedle, setSearchNeedle] = useState("");

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  if (!entireCollection) return;

  const options = entireCollection.map((miniature) => ({
    id: miniature.slug,
    label: miniature.displayName,
  }));

  return (
    <Typeahead
      ref={inputRef}
      open={searchNeedle.length > 1}
      highlightOnlyResult={true}
      onFocus={(e) => e.target.select()}
      id="search miniatures by name"
      onChange={(selected) => navigateTo(selected[0])}
      options={options}
      placeholder="Search"
      onInputChange={(e) => setSearchNeedle(e)}
      renderMenuItemChildren={(option, _props, index) => (
        <SearchResult slug={option.id} needle={searchNeedle} key={index} />
      )}
    />
  );
};

export default SearchField;