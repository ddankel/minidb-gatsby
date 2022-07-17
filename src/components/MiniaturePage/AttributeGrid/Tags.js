import React from "react";
import { Badge } from "react-bootstrap";
import _ from "lodash";

import Attribute from "./Attribute";

const arrayToBadges = (items) => {
  return (
    <>
      {items.map((item) => (
        <React.Fragment key={item}>
          <Badge bg="secondary">{_.upperFirst(item)}</Badge>{" "}
        </React.Fragment>
      ))}
    </>
  );
};

const Tags = ({ tags }) => {
  return <Attribute label="Tags">{arrayToBadges(tags)}</Attribute>;
};

export default Tags;
