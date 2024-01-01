import { without } from "lodash";

const removeFromFilter = (existingFilter: string[], outgoingItem: string) => {
  return without(existingFilter, outgoingItem);
};

export default removeFromFilter;
