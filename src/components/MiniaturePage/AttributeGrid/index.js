import React from "react";
import { Stack } from "react-bootstrap";
import Count from "./Quantity";
import Status from "./Status";
import Tags from "./Tags";
import TagList from "./Tags/TagList";

const AttributeGrid = ({ quantity, race, archetype, weapons, armor, status, painted }) => {
  if (!race) race = [];
  if (!archetype) archetype = [];
  if (!armor) armor = [];
  if (!weapons) weapons = [];
  if (!status) status = "painted";
  if (!quantity) quantity = 1;

  return (
    <Stack gap={1}>
      <Status status={status} painted={painted} />
      <Tags>
        <TagList attribute="race" tags={race} />
        <TagList attribute="archetype" tags={archetype} />
        <TagList attribute="weapon" tags={weapons} />
        <TagList attribute="armor" tags={armor} />
      </Tags>
      {quantity > 1 && <Count count={quantity} />}
    </Stack>
  );
};

export default AttributeGrid;
