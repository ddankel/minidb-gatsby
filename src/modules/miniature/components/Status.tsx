import { Badge } from "react-bootstrap";
import { upperFirst } from "lodash";

import Attribute from "./Attribute";

const colors: { [index: string]: string } = {
  unassembled: "light",
  unpainted: "light",
  prepainted: "success",
  wip: "info",
  painted: "primary",
};

type StatusProps = {
  paintedAt?: string;
  paintedState: string;
};

const Status = ({ paintedAt, paintedState }: StatusProps) => {
  const label = !!paintedAt ? `Painted: ${paintedAt}` : upperFirst(paintedState);

  return (
    <Attribute label="Status">
      <Badge bg={colors[paintedState]}>{label}</Badge>
    </Attribute>
  );
};

export default Status;
