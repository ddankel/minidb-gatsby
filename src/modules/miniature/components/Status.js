import React from "react";
import { Badge } from "react-bootstrap";
import _ from "lodash";

import Attribute from "./Attribute";

const colors = {
  unassembled: "light",
  unpainted: "light",
  prepainted: "success",
  wip: "info",
  painted: "primary",
};

const Status = ({ paintedAt, paintedState }) => {
  const label = !!paintedAt ? `Painted: ${paintedAt}` : _.upperFirst(paintedState);

  return (
    <Attribute label="Status">
      <Badge bg={colors[paintedState]}>{label}</Badge>
      <Badge bg={colors[paintedState]}>{label}</Badge>
    </Attribute>
  );
};

export default Status;
