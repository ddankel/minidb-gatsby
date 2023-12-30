import { FilterState } from "../types";

const excludeStateAttributes = (...excludedAttributes: string[]) => {
  return (state: FilterState) => {
    const retainedAttributes = Object.entries(state).filter(
      ([key]) => ![...excludedAttributes].includes(key)
    );
    return Object.fromEntries(retainedAttributes);
  };
};

export default excludeStateAttributes;
