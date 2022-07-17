import React from "react";
import { Stack } from "react-bootstrap";
import Count from "./Quantity";
import Status from "./Status";
import Tags from "./Tags";

const AttributeGrid = ({ quantity, armor, race, weapons, status, painted }) => {
  if (!race) race = [];
  if (!armor) armor = [];
  if (!weapons) weapons = [];
  if (!status) status = "painted";
  if (!quantity) quantity = 1;

  return (
    <Stack gap={1}>
      <Status status={status} painted={painted} />
      <Tags tags={[...race, ...weapons, ...armor]} />
      {quantity > 1 && <Count count={quantity} />}
    </Stack>
  );
};

export default AttributeGrid;
