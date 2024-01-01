import Accordion from "react-bootstrap/Accordion";
import { AccordionEventKey } from "react-bootstrap/esm/AccordionContext";
import { useSessionStorage } from "usehooks-ts";

import ArchetypeFilter from "./components/ArchetypeFilter";
import ArmorFilter from "./components/ArmorFilter";
import GenreFilter from "./components/GenreFilter";
import MiniatureLineFilter from "./components/MiniatureLineFilter";
import SpeciesFilter from "./components/SpeciesFilter";
import StatusFilter from "./components/StatusFilter";
import WeaponFilter from "./components/WeaponFilter";
import { Body, Header, Item } from "./styled";

const FilterAccordion = () => {
  const [accordionKey, setAccordionKey] = useSessionStorage<AccordionEventKey | null>(
    "filter-accordion",
    null
  );

  return (
    <Accordion flush activeKey={accordionKey} onSelect={(key) => setAccordionKey(key)}>
      <Item eventKey="0">
        <Header>Genre</Header>
        <Body>
          <GenreFilter />
        </Body>
      </Item>
      <Item eventKey="1">
        <Header>Species</Header>
        <Body>
          <SpeciesFilter />
        </Body>
      </Item>
      <Item eventKey="2">
        <Header>Archetype</Header>
        <Body>
          <ArchetypeFilter />
        </Body>
      </Item>
      <Item eventKey="3">
        <Header>Weapon</Header>
        <Body>
          <WeaponFilter />
        </Body>
      </Item>
      <Item eventKey="4">
        <Header>Armor</Header>
        <Body>
          <ArmorFilter />
        </Body>
      </Item>
      <Item eventKey="5">
        <Header>Line</Header>
        <Body>
          <MiniatureLineFilter />
        </Body>
      </Item>
      <Item eventKey="6">
        <Header>Status</Header>
        <Body>
          <StatusFilter />
        </Body>
      </Item>
    </Accordion>
  );
};

export default FilterAccordion;
