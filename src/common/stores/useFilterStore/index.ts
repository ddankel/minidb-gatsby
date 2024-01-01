import { create } from "zustand";
import { devtools, persist, subscribeWithSelector } from "zustand/middleware";

import { useCollectionStore } from "../useCollectionStore";
import { devtoolsOptions, persistOptions } from "./options";
import { FilterState, FilterStateValues } from "./types";

import addToFilter from "./utils/store/addToFilter";
import removeFromFilter from "./utils/store/removeFromFilter";
import extractFiltersFromToken from "./utils/subscriptions/extractFiltersFromToken";
import subscriptionOptions from "./utils/subscriptions/subscriptionOptions";
import watchAllFilters from "./utils/subscriptions/watchAllFilters";

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

export const useFilterStore = create<FilterState>()(
  devtools(
    subscribeWithSelector(
      persist(
        (set, get): FilterState => ({
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
            addGenreFilter: (value) => set({ genreFilter: addToFilter(get().genreFilter, value) }),
            removeGenreFilter: (value) =>
              set({ genreFilter: removeFromFilter(get().genreFilter, value) }),

            addSpeciesFilter: (value) =>
              set({ speciesFilter: addToFilter(get().speciesFilter, value) }),
            removeSpeciesFilter: (value) =>
              set({ speciesFilter: removeFromFilter(get().speciesFilter, value) }),

            addArchetypeFilter: (value) =>
              set({ archetypeFilter: addToFilter(get().archetypeFilter, value) }),
            removeArchetypeFilter: (value) =>
              set({ archetypeFilter: removeFromFilter(get().archetypeFilter, value) }),

            addWeaponFilter: (value) =>
              set({ weaponFilter: addToFilter(get().weaponFilter, value) }),
            removeWeaponFilter: (value) =>
              set({ weaponFilter: removeFromFilter(get().weaponFilter, value) }),

            addArmorFilter: (value) => set({ armorFilter: addToFilter(get().armorFilter, value) }),
            removeArmorFilter: (value) =>
              set({ armorFilter: removeFromFilter(get().armorFilter, value) }),

            setPaintedFilter: (value) => set({ paintedFilter: value }),
            addPaintedFilter: (value) =>
              set({ paintedFilter: addToFilter(get().paintedFilter, value) }),
            removePaintedFilter: (value) =>
              set({ paintedFilter: removeFromFilter(get().paintedFilter, value) }),

            addNameFilter: (value) => set({ nameFilter: addToFilter(get().nameFilter, value) }),
            removeNameFilter: (value) =>
              set({ nameFilter: removeFromFilter(get().nameFilter, value) }),

            setLineFilter: (value) => set({ lineFilter: [value] }),
            addLineFilter: (value) => set({ lineFilter: addToFilter(get().lineFilter, value) }),
            removeLineFilter: (value) =>
              set({ lineFilter: removeFromFilter(get().lineFilter, value) }),

            setIgnoreMonsters: (value) => set({ ignoreMonsters: value }),

            setFilter: (label, value) => {
              const newValue = [value].flat();
              const payload: FilterStateValues = { ...defaultState };
              payload[label] = newValue;

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
        }),
        persistOptions
      )
    ),
    devtoolsOptions
  )
);

/**
 * Add Subscriptions
 *
 * @source https://github.com/pmndrs/zustand#using-subscribe-with-selector
 */
useFilterStore.subscribe(
  watchAllFilters,
  (token, _previousToken) => useFilterStore.getState().triggers.updateIsFiltered(),
  subscriptionOptions
);

useFilterStore.subscribe(
  watchAllFilters,
  (token, _previousToken) => {
    const filters = extractFiltersFromToken(token);
    useCollectionStore.getState().triggers.updateGalleryFilter(filters);
  },
  subscriptionOptions
);

// Export hooks
export const useGenreFilter = () => useFilterStore((state) => state.genreFilter);
export const useSpeciesFilter = () => useFilterStore((state) => state.speciesFilter);
export const useArchetypeFilter = () => useFilterStore((state) => state.archetypeFilter);
export const useWeaponFilter = () => useFilterStore((state) => state.weaponFilter);
export const useArmorFilter = () => useFilterStore((state) => state.armorFilter);
export const usePaintedFilter = () => useFilterStore((state) => state.paintedFilter);
export const useNameFilter = () => useFilterStore((state) => state.nameFilter);
export const useLineFilter = () => useFilterStore((state) => state.lineFilter);
export const useIgnoreMonsters = () => useFilterStore((state) => state.ignoreMonsters);
export const useIsFiltered = () => useFilterStore((state) => state.isFiltered);

export const useFilterActions = () => useFilterStore((state) => state.actions);
