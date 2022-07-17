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

const Status = ({ status, painted }) => {
  let label = _.upperFirst(status);
  if (!!painted) {
    label = `Painted: ${painted}`;
  }

  return (
    <Attribute label="Status">
      <Badge bg={colors[status]}>{label}</Badge>
    </Attribute>
  );
};

export default Status;
