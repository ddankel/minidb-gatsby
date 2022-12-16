import shallow from "zustand/shallow";
import _ from "lodash";
import useStore from "../";

/**
 * A hook to wrap zustand's useStore in such a way to be used similar to React.useState
 *
 * This hook accepts a single parameter (key) and expects corresponding values
 * to be defined in the zustand state.  Those definitions must be done in
 * useStore's definition (or within a slice included therein).  The state
 * itself must match the key provided, and the getter must be defined by
 * prepending a capitolized key with 'get'.  For example:
 *
 *     // useStore.js
 *     const useStore = create({
 *       thing: undefined,
 *       setThing: (value) => set({thing: value})
 *     })
 *
 *     // in your component:
 *     const Component = () => {
 *       const [thing, setThing] = useStoreState('thing');
 *     }
 *
 * @param   {String}  key  The state key to contain this state
 */
const useStoreState = (key) =>
  useStore((state) => {
    const getter = key;
    const setter = `set${_.upperFirst(key)}`;

    // Verify getter and setters
    if (!(getter in state)) throw new Error(`Zustand store does not contain the '${getter}' key`);
    if (!(setter in state)) throw new Error(`Zustand store does not contain the '${setter}' key`);

    // Return in useState format
    return [state[getter], state[setter]];
  }, shallow);

export default useStoreState;
