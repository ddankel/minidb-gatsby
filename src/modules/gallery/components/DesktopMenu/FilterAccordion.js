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

  const speciesFilter = useFilterStoreItem("speciesFilter");
  const addSpeciesFilter = useFilterStoreItem("addSpeciesFilter");
  const removeSpeciesFilter = useFilterStoreItem("removeSpeciesFilter");

  const archetypeFilter = useFilterStoreItem("archetypeFilter");
  const addArchetypeFilter = useFilterStoreItem("addArchetypeFilter");
  const removeArchetypeFilter = useFilterStoreItem("removeArchetypeFilter");

  const weaponFilter = useFilterStoreItem("weaponFilter");
  const addWeaponFilter = useFilterStoreItem("addWeaponFilter");
  const removeWeaponFilter = useFilterStoreItem("removeWeaponFilter");

  const armorFilter = useFilterStoreItem("armorFilter");
  const addArmorFilter = useFilterStoreItem("addArmorFilter");
  const removeArmorFilter = useFilterStoreItem("removeArmorFilter");

  const lineFilter = useFilterStoreItem("lineFilter");
  const addLineFilter = useFilterStoreItem("addLineFilter");
  const removeLineFilter = useFilterStoreItem("removeLineFilter");

  return (
    <Accordion flush activeKey={accordionKey} onSelect={(key) => setAccordionKey(key)}>
      <Item eventKey="0">
        <Header>Species</Header>
        <Body>
          <TagFilter
            title="Species"
            value={speciesFilter}
            options={tagList.raceTags}
            onAdd={(val) => addSpeciesFilter(val)}
            onRemove={(val) => removeSpeciesFilter(val)}
            multiple
          />
        </Body>
      </Item>
      <Item eventKey="1">
        <Header>Archetype</Header>
        <Body>
          <TagFilter
            title="Archetype"
            value={archetypeFilter}
            options={tagList.archetypeTags}
            onAdd={(val) => addArchetypeFilter(val)}
            onRemove={(val) => removeArchetypeFilter(val)}
          />
        </Body>
      </Item>
      <Item eventKey="2">
        <Header>Weapon</Header>
        <Body>
          <TagFilter
            title="Weapon"
            value={weaponFilter}
            options={tagList.weaponTags}
            onAdd={(val) => addWeaponFilter(val)}
            onRemove={(val) => removeWeaponFilter(val)}
          />
        </Body>
      </Item>
      <Item eventKey="4">
        <Header>Armor</Header>
        <Body>
          <TagFilter
            title="Armor"
            value={armorFilter}
            options={tagList.armorTags}
            onAdd={(val) => addArmorFilter(val)}
            onRemove={(val) => removeArmorFilter(val)}
          />
        </Body>
      </Item>
      <Item eventKey="5">
        <Header>Line</Header>
        <Body>
          <TagFilter
            title="Line"
            value={lineFilter}
            options={tagList.lines}
            onAdd={(val) => addLineFilter(val)}
            onRemove={(val) => removeLineFilter(val)}
          />
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
