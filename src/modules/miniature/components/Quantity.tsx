import Attribute from "./Attribute";

type QuantityProps = {
  count: number;
};

const Quantity = ({ count }: QuantityProps) => {
  if (count === 1) return null;

  return <Attribute label="Quantity">{count}</Attribute>;
};

export default Quantity;
