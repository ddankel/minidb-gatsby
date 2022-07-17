import React from "react";
import { Stack } from "react-bootstrap";
import Count from "./Quantity";
import Status from "./Status";
import Tags from "./Tags";

const AttributeGrid = ({ mini_count, armor, race, weapons, status, painted }) => {
  if (!race) race = [];
  if (!armor) armor = [];
  if (!weapons) weapons = [];
  if (!status) status = "painted";
  if (!mini_count) mini_count = 1;

  return (
    <Stack gap={1}>
      <Status status={status} painted={painted} />
      <Tags tags={[...race, ...weapons, ...armor]} />
      {mini_count > 1 && <Count count={mini_count} />}
    </Stack>
  );
};

export default AttributeGrid;
