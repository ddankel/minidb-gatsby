import _ from "lodash";

const defaultState = {
  speciesFilter: [],
  archetypeFilter: [],
  weaponFilter: [],
  armorFilter: [],
  paintedFilter: [],
  nameFilter: [],
  lineFilter: [],
};

// TODO: move to util functions i think
const addFilter = (existingFilter, newItem) => [...new Set([...existingFilter, newItem])].sort();
const removeFilter = (existingFilter, outgoingItem) => _.without(existingFilter, outgoingItem);

// Build zustand store
const store = (set, get) => ({
  filteredCollection: [],
  setFilteredCollection: (value) => set({ filteredCollection: value }),

  speciesFilter: defaultState.speciesFilter,
  archetypeFilter: defaultState.archetypeFilter,
  weaponFilter: defaultState.weaponFilter,
  armorFilter: defaultState.armorFilter,
  paintedFilter: defaultState.paintedFilter,
  nameFilter: defaultState.nameFilter,
  lineFilter: defaultState.lineFilter,
  ignoreMonsters: false,
  isFiltered: false,

  actions: {
    addSpeciesFilter: (value) =>
      set((state) => ({ speciesFilter: addFilter(state.speciesFilter, value) })),
    removeSpeciesFilter: (value) =>
      set((state) => ({ speciesFilter: removeFilter(state.speciesFilter, value) })),

    addArchetypeFilter: (value) =>
      set((state) => ({ archetypeFilter: addFilter(state.archetypeFilter, value) })),
    removeArchetypeFilter: (value) =>
      set((state) => ({ archetypeFilter: removeFilter(state.archetypeFilter, value) })),

    addWeaponFilter: (value) =>
      set((state) => ({ weaponFilter: addFilter(state.weaponFilter, value) })),
    removeWeaponFilter: (value) =>
      set((state) => ({ weaponFilter: removeFilter(state.weaponFilter, value) })),

    addArmorFilter: (value) =>
      set((state) => ({ armorFilter: addFilter(state.armorFilter, value) })),
    removeArmorFilter: (value) =>
      set((state) => ({ armorFilter: removeFilter(state.armorFilter, value) })),

    setPaintedFilter: (value) => set({ paintedFilter: value }),
    addPaintedFilter: (value) =>
      set((state) => ({ paintedFilter: addFilter(state.paintedFilter, value) })),
    removePaintedFilter: (value) =>
      set((state) => ({ paintedFilter: removeFilter(state.paintedFilter, value) })),

    addNameFilter: (value) => set((state) => ({ nameFilter: addFilter(state.nameFilter, value) })),
    removeNameFilter: (value) =>
      set((state) => ({ nameFilter: removeFilter(state.nameFilter, value) })),

    addLineFilter: (value) => set((state) => ({ lineFilter: addFilter(state.lineFilter, value) })),
    removeLineFilter: (value) =>
      set((state) => ({ lineFilter: removeFilter(state.lineFilter, value) })),

    setIgnoreMonsters: (value) => set({ ignoreMonsters: value }),

    setFilter: (label, value, options = {}) => {
      options = { merge: true, ...options };
      const payload = !!options.merge ? {} : { ...defaultState };
      payload[label] = [value].flat();

      set(payload);
    },

    // setIsFiltered: (value) => set((state) => ({ isFiltered: value })),

    resetFilters: () => set(defaultState),
  },

  // isFiltered: () => {
  //   if (get().ignoreMonsters) return true;

  //   const filters = [
  //     get().speciesFilter,
  //     get().archetypeFilter,
  //     get().weaponFilter,
  //     get().armorFilter,
  //     get().paintedFilter,
  //     get().lineFilter,
  //   ];

  //   return filters.some((item) => !!item.length);
  // },
});

export default store;
