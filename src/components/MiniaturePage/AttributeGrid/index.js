import React from "react";
import { Stack } from "react-bootstrap";
import Count from "./Quantity";
import Status from "./Status";
import Tags from "./Tags";
import TagList from "./Tags/TagList";

const AttributeGrid = (props) => {
  const { quantity, paintedAt, paintedState } = props;
  const { raceTags, archetypeTags, weaponTags, armorTags } = props;

  return (
    <Stack gap={1}>
      <Status paintedAt={paintedAt} paintedState={paintedState} />
      <Tags>
        <TagList attribute="race" tags={raceTags} />
        <TagList attribute="archetype" tags={archetypeTags} />
        <TagList attribute="weapon" tags={weaponTags} />
        <TagList attribute="armor" tags={armorTags} />
      </Tags>
      {quantity > 1 && <Count count={quantity} />}
    </Stack>
  );
};

export default AttributeGrid;
