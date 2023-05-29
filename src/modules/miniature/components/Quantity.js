import Attribute from "./Attribute";

const Quantity = ({ count }) => {
  if (count === 1) return null;

  return <Attribute label="Quantity">{count}</Attribute>;
};

export default Quantity;
