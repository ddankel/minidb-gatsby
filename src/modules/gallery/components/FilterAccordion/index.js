import React from "react";
import Accordion from "react-bootstrap/Accordion";

import useAggregatedTags from "../../hooks/useAggregatedTagsOBSOLETE";
import TagFilter from "../TagFilter/index.obsolete";
import { Item, Header, Body } from "./styled";
import { useSessionStorage } from "react-use-storage";
import { useFilterStoreItem } from "@/hooks/useFilterStore";
import SpeciesFilter from "./components/SpeciesFilter";
import StatusFilter from "./components/StatusFilter";
import ArchetypeFilter from "./components/ArchetypeFilter";
import ArmorFilter from "./components/ArmorFilter";
import WeaponFilter from "./components/WeaponFilter";
import MiniatureLineFilter from "./components/MiniatureLineFilter";

const FilterAccordion = () => {
  const tagList = useAggregatedTags();
  const [accordionKey, setAccordionKey] = useSessionStorage("filter-accordion", null);

  const archetypeFilter = useFilterStoreItem("archetypeFilter");
  const setArchetypeFilter = useFilterStoreItem("setArchetypeFilter");
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

  const paintedFilter = useFilterStoreItem("paintedFilter");
  const addPaintedFilter = useFilterStoreItem("addPaintedFilter");
  const removePaintedFilter = useFilterStoreItem("removePaintedFilter");

  return (
    <Accordion flush activeKey={accordionKey} onSelect={(key) => setAccordionKey(key)}>
      <Item eventKey="0">
        <Header>Species</Header>
        <Body>
          <SpeciesFilter />
        </Body>
      </Item>
      <Item eventKey="1">
        <Header>Archetype</Header>
        <Body>
          <ArchetypeFilter />
          {/* <TagFilter
            name="Archetype"
            value={archetypeFilter}
            options={tagList.archetypeTags}
            onAdd={(val) => setArchetypeFilter([val])}
            onRemove={(val) => removeArchetypeFilter(val)}
          /> */}
        </Body>
      </Item>
      <Item eventKey="2">
        <Header>Weapon</Header>
        <Body>
          <WeaponFilter />
          {/* <TagFilter
            name="Weapon"
            value={weaponFilter}
            options={tagList.weaponTags}
            onAdd={(val) => addWeaponFilter(val)}
            onRemove={(val) => removeWeaponFilter(val)}
          /> */}
        </Body>
      </Item>
      <Item eventKey="4">
        <Header>Armor</Header>
        <Body>
          <ArmorFilter />
          {/* <TagFilter
            name="Armor"
            value={armorFilter}
            options={tagList.armorTags}
            onAdd={(val) => addArmorFilter(val)}
            onRemove={(val) => removeArmorFilter(val)}
          /> */}
        </Body>
      </Item>
      <Item eventKey="5">
        <Header>Line</Header>
        <Body>
          <MiniatureLineFilter />
          {/* <TagFilter
            name="Line"
            value={lineFilter}
            options={tagList.lines}
            onAdd={(val) => addLineFilter(val)}
            onRemove={(val) => removeLineFilter(val)}
          /> */}
        </Body>
      </Item>
      <Item eventKey="6">
        <Header>Status</Header>
        <Body>
          {/* <TagFilter
            name="Status"
            value={paintedFilter}
            options={tagList.paintedTags}
            onAdd={(val) => addPaintedFilter(val)}
            onRemove={(val) => removePaintedFilter(val)}
          /> */}
          <StatusFilter />
        </Body>
      </Item>
    </Accordion>
  );
};

export default FilterAccordion;
