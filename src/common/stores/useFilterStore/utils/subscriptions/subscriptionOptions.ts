import { shallow } from "zustand/shallow";

const subscriptionOptions = {
  equalityFn: shallow,
  fireImmediately: true,
};

export default subscriptionOptions;
