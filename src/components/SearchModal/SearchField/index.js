import React from "react";
import { navigate } from "gatsby";
import { Typeahead } from "react-bootstrap-typeahead";
import useFrontmatter from "../../../hooks/useFrontmatter";
import SearchResult from "../SearchResult";

const navigateTo = (selection) => navigate(`/minis/${selection.id}`);

const SearchField = () => {
  const inputRef = React.useRef();
  const miniatureNodes = useFrontmatter();
  const [searchNeedle, setSearchNeedle] = React.useState("");

  React.useEffect(() => {
    inputRef.current.focus();
  }, []);

  if (!miniatureNodes) return;
  const options = miniatureNodes.map((frontmatter) => ({
    id: frontmatter.slug,
    label: frontmatter.sku || frontmatter.name,
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
