import React from "react";
import _ from "lodash";
import Accordion from "react-bootstrap/Accordion";

import useAggregatedTags from "../../hooks/useAggregatedTags";
import TagFilter from "../TagFilter";
import { Item, Header, Body } from "./FilterAccordion.styled";
import { useSessionStorage } from "react-use-storage";
import { useFilterStoreItem, useFilterStoreState } from "@/hooks/useFilterStore";

const FilterAccordion = ({}) => {
  const tagList = useAggregatedTags();
  const [accordionKey, setAccordionKey] = useSessionStorage("filter-accordion", null);

  const [species, setSpecies] = React.useState([]);
  const [speciesFilter, setSpeciesFilter] = useFilterStoreState("speciesFilter");
  const addSpeciesFilter = useFilterStoreItem("addSpeciesFilter");
  const removeSpeciesFilter = useFilterStoreItem("removeSpeciesFilter");

  return (
    <Accordion flush activeKey={accordionKey} onSelect={(key) => setAccordionKey(key)}>
      <Item eventKey="0">
        <Header>Species</Header>
        <Body>
          <TagFilter
            title="Species"
            value={speciesFilter}
            options={tagList.raceTags}
            // onChange={(val) => setSpeciesFilter(val)}
            onAdd={(val) => addSpeciesFilter(val)}
            onRemove={(val) => removeSpeciesFilter(val)}
            multiple
          />
        </Body>
      </Item>
      <Item eventKey="1">
        <Header>Archtype</Header>
        <Body>
          <TagFilter title="Archtype" value={[]} options={tagList.archetypeTags} />
        </Body>
      </Item>
      <Item eventKey="2">
        <Header>Weapon</Header>
        <Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
          sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.
        </Body>
      </Item>
      <Item eventKey="4">
        <Header>Armor</Header>
        <Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
          sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.
        </Body>
      </Item>
      <Item eventKey="5">
        <Header>Line</Header>
        <Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
          sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.
        </Body>
      </Item>
      <Item eventKey="6">
        <Header>Status</Header>
        <Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
          sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.
        </Body>
      </Item>
    </Accordion>
  );
};

export default FilterAccordion;
