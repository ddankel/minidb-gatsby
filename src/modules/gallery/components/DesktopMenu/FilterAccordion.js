import React from "react";
import Accordion from "react-bootstrap/Accordion";

import useAggregatedTags from "../../hooks/useAggregatedTags";
import TagFilter from "../TagFilter";
import { Item, Header, Body } from "./FilterAccordion.styled";
import { useSessionStorage } from "react-use-storage";
import { useFilterStoreItem } from "@/hooks/useFilterStore";

const FilterAccordion = () => {
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

  const paintedFilter = useFilterStoreItem("paintedFilter");
  const addPaintedFilter = useFilterStoreItem("addPaintedFilter");
  const removePaintedFilter = useFilterStoreItem("removePaintedFilter");

  return (
    <Accordion flush activeKey={accordionKey} onSelect={(key) => setAccordionKey(key)}>
      <Item eventKey="0">
        <Header>Species</Header>
        <Body>
          <TagFilter
            name="Species"
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
            name="Archetype"
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
            name="Weapon"
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
            name="Armor"
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
            name="Line"
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
          <TagFilter
            name="Status"
            value={paintedFilter}
            options={tagList.paintedTags}
            onAdd={(val) => addPaintedFilter(val)}
            onRemove={(val) => removePaintedFilter(val)}
          />
        </Body>
      </Item>
    </Accordion>
  );
};

export default FilterAccordion;
