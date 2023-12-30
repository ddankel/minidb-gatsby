import { navigate } from "gatsby";
import { useEffect, useRef, useState } from "react";
import { Typeahead, TypeaheadRef } from "react-bootstrap-typeahead";

import { useEntireCollection } from "@/common/hooks/useCollections";
import SearchResult from "../SearchResult";
import extractOptionsFromCollection from "./extractOptionsFromCollection";
import { SearchOption } from "../types/SearchOption";

const navigateTo = (selection: SearchOption) => navigate(`/minis/${selection.id}`);

const SearchField = () => {
  const inputRef = useRef<TypeaheadRef>(null);
  const [searchNeedle, setSearchNeedle] = useState("");
  const entireCollection = useEntireCollection();

  useEffect(() => {
    inputRef?.current?.focus();
  }, []);

  if (!entireCollection.length) return null;

  const options: SearchOption[] = extractOptionsFromCollection(entireCollection);

  return (
    <Typeahead
      ref={inputRef}
      open={searchNeedle.length > 1}
      highlightOnlyResult={true}
      id="search miniatures by name"
      onChange={(selected) => navigateTo(selected[0] as SearchOption)}
      options={options}
      placeholder="Search"
      onInputChange={(e) => setSearchNeedle(e)}
      renderMenuItemChildren={(option, _props, index) => {
        const selected = option as SearchOption;
        return <SearchResult slug={selected.id} needle={searchNeedle} key={index} />;
      }}
    />
  );
};

export default SearchField;
