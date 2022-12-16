import useStore from "../";

/**
 * Shorthand to simplify using a single value from the Zustand store
 *
 * @example
 *     // useStore.js
 *     const useStore = create({
 *       thing: undefined,
 *     })
 *
 *     // in your component:
 *     const Component = () => {
 *       const [thing] = useStoreItem('thing');
 *     }
 *
 * This hook gives easy read access to a single item.  For multiple items,
 * see useStoreItems.  To mutate data, use the base Zustand syntax
 * or useStoreState.
 *
 *
 * @param   {string}       key    [The key of the state value to access]
 */
const useStoreItem = (key) => useStore((state) => state[key]);

export default useStoreItem;
