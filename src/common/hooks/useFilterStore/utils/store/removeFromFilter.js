import { without } from "lodash";

const removeFromFilter = (existingFilter, outgoingItem) => without(existingFilter, outgoingItem);

export default removeFromFilter;
