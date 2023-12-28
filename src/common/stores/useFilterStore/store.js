import addToFilter from "./utils/store/addToFilter";
import removeFromFilter from "./utils/store/removeFromFilter";

const defaultState = {
  genreFilter: [],
  speciesFilter: [],
  archetypeFilter: [],
  weaponFilter: [],
  armorFilter: [],
  paintedFilter: [],
  nameFilter: [],
  lineFilter: [],
};

// Build zustand store
const store = (set, get) => ({
  genreFilter: defaultState.genreFilter,
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
    addGenreFilter: (value) =>
      set((state) => ({ genreFilter: addToFilter(state.genreFilter, value) })),
    removeGenreFilter: (value) =>
      set((state) => ({ genreFilter: removeFromFilter(state.genreFilter, value) })),

    addSpeciesFilter: (value) =>
      set((state) => ({ speciesFilter: addToFilter(state.speciesFilter, value) })),
    removeSpeciesFilter: (value) =>
      set((state) => ({ speciesFilter: removeFromFilter(state.speciesFilter, value) })),

    addArchetypeFilter: (value) =>
      set((state) => ({ archetypeFilter: addToFilter(state.archetypeFilter, value) })),
    removeArchetypeFilter: (value) =>
      set((state) => ({ archetypeFilter: removeFromFilter(state.archetypeFilter, value) })),

    addWeaponFilter: (value) =>
      set((state) => ({ weaponFilter: addToFilter(state.weaponFilter, value) })),
    removeWeaponFilter: (value) =>
      set((state) => ({ weaponFilter: removeFromFilter(state.weaponFilter, value) })),

    addArmorFilter: (value) =>
      set((state) => ({ armorFilter: addToFilter(state.armorFilter, value) })),
    removeArmorFilter: (value) =>
      set((state) => ({ armorFilter: removeFromFilter(state.armorFilter, value) })),

    setPaintedFilter: (value) => set({ paintedFilter: value }),
    addPaintedFilter: (value) =>
      set((state) => ({ paintedFilter: addToFilter(state.paintedFilter, value) })),
    removePaintedFilter: (value) =>
      set((state) => ({ paintedFilter: removeFromFilter(state.paintedFilter, value) })),

    addNameFilter: (value) =>
      set((state) => ({ nameFilter: addToFilter(state.nameFilter, value) })),
    removeNameFilter: (value) =>
      set((state) => ({ nameFilter: removeFromFilter(state.nameFilter, value) })),

    setLineFilter: (value) => set({ lineFilter: [value] }),
    addLineFilter: (value) =>
      set((state) => ({ lineFilter: addToFilter(state.lineFilter, value) })),
    removeLineFilter: (value) =>
      set((state) => ({ lineFilter: removeFromFilter(state.lineFilter, value) })),

    setIgnoreMonsters: (value) => set({ ignoreMonsters: value }),

    setFilter: (label, value, options = {}) => {
      options = { merge: true, ...options };
      const payload = !!options.merge ? {} : { ...defaultState };
      payload[label] = [value].flat();

      set(payload);
    },

    resetFilters: () => set(defaultState),
  },

  triggers: {
    updateIsFiltered: () => {
      const arrayFilters = [
        get().genreFilter,
        get().speciesFilter,
        get().archetypeFilter,
        get().weaponFilter,
        get().armorFilter,
        get().paintedFilter,
        get().nameFilter,
        get().lineFilter,
      ];

      set({ isFiltered: arrayFilters.some((item) => !!item.length) });
    },
  },
});

export default store;
