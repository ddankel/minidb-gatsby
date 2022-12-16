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

const addFilter = (existingFilter, newItem) => [...new Set([...existingFilter, newItem])].sort();
const removeFilter = (existingFilter, outgoingItem) => _.without(existingFilter, outgoingItem);

// Build zustand store
const store = (set, get) => ({
  speciesFilter: defaultState.speciesFilter,
  setSpeciesFilter: (value) => set({ speciesFilter: value }),
  addSpeciesFilter: (value) =>
    set((state) => ({ speciesFilter: addFilter(state.speciesFilter, value) })),
  removeSpeciesFilter: (value) =>
    set((state) => ({ speciesFilter: removeFilter(state.speciesFilter, value) })),

  archetypeFilter: defaultState.archetypeFilter,
  setArchetypeFilter: (value) => set({ archetypeFilter: value }),
  addArchetypeFilter: (value) =>
    set((state) => ({ archetypeFilter: addFilter(state.archetypeFilter, value) })),
  removeArchetypeFilter: (value) =>
    set((state) => ({ archetypeFilter: removeFilter(state.archetypeFilter, value) })),

  weaponFilter: defaultState.weaponFilter,
  setWeaponFilter: (value) => set({ weaponFilter: value }),
  addWeaponFilter: (value) =>
    set((state) => ({ weaponFilter: addFilter(state.weaponFilter, value) })),
  removeWeaponFilter: (value) =>
    set((state) => ({ weaponFilter: removeFilter(state.weaponFilter, value) })),

  armorFilter: defaultState.armorFilter,
  setArmorFilter: (value) => set({ armorFilter: value }),
  addArmorFilter: (value) => set((state) => ({ armorFilter: addFilter(state.armorFilter, value) })),
  removeArmorFilter: (value) =>
    set((state) => ({ armorFilter: removeFilter(state.armorFilter, value) })),

  paintedFilter: defaultState.paintedFilter,
  setPaintedFilter: (value) => set({ paintedFilter: value }),
  addPaintedFilter: (value) =>
    set((state) => ({ paintedFilter: addFilter(state.paintedFilter, value) })),
  removePaintedFilter: (value) =>
    set((state) => ({ paintedFilter: removeFilter(state.paintedFilter, value) })),

  nameFilter: defaultState.nameFilter,
  setNameFilter: (value) => set({ nameFilter: value }),
  addNameFilter: (value) => set((state) => ({ nameFilter: addFilter(state.nameFilter, value) })),
  removeNameFilter: (value) =>
    set((state) => ({ nameFilter: removeFilter(state.nameFilter, value) })),

  lineFilter: defaultState.lineFilter,
  setLineFilter: (value) => set({ lineFilter: value }),
  addLineFilter: (value) => set((state) => ({ lineFilter: addFilter(state.lineFilter, value) })),
  removeLineFilter: (value) =>
    set((state) => ({ lineFilter: removeFilter(state.lineFilter, value) })),

  ignoreMonsters: false,
  setIgnoreMonsters: (value) => set({ ignoreMonsters: value }),

  setFilter: (label, value, options = {}) => {
    options = { merge: true, ...options };
    const payload = !!options.merge ? {} : { ...defaultState };
    payload[label] = value;

    set(payload);
  },

  resetFilters: () => set(defaultState),

  isFiltered: () => {
    if (get().ignoreMonsters) return true;

    const filters = [
      get().speciesFilter,
      get().archetypeFilter,
      get().weaponFilter,
      get().armorFilter,
      get().paintedFilter,
      get().lineFilter,
    ];

    return filters.some((item) => !!item.length);
  },
});

export default store;
