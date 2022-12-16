import useStore from "../";
import shallow from "zustand/shallow";

/**
 * Shorthand to simplify using a multiple values from the Zustand store
 *
 * @example
 *     // useStore.js
 *     const useStore = create({
 *       thing: undefined,
 *       thang: undefned,
 *       thung: undefined
 *     })
 *
 *     // in your component:
 *     const Component = () => {
 *       const {thing, thang, thung} = useStoreItem('thing', 'thang', 'thung');
 *     }
 *
 * This hook gives easy read access to a single item.  For multiple items,
 * see useStoreItems.  To mutate data, use the base Zustand syntax
 * or useStoreState.
 *
 *
 * @param   {string}       key    [The key of the state value to access]
 */
const useStoreItems = (...keys) =>
  useStore((state) => {
    const hash = [keys].flat().forEach((key) => {
      hash[key] = state[key];
    });
    return hash;
  }, shallow);

export default useStoreItems;
