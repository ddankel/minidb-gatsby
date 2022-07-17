import React from "react";
import Attribute from "./Attribute";

const Quantity = ({ count }) => {
  return <Attribute label="Quantity">{count}</Attribute>;
};

export default Quantity;
