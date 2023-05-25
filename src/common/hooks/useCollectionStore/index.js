import { create } from "zustand";
import { devtools, persist, createJSONStorage, subscribeWithSelector } from "zustand/middleware";

import { shallow } from "zustand/shallow";
import GalleryFilter from "../useFilteredCollection/GalleryFilter";
import objectHash from "object-hash";

// Start with base store definition
let store = (set, get) => ({
  entireCollection: [],
  galleyFilter: undefined,
  filteredCollection: [],

  actions: {
    setEntireCollection: (value) => set({ entireCollection: value }),
    setGalleryFilter: (value) => set({ galleyFilter: value }),
    setFilteredCollection: (value) => set({ filteredCollection: value }),
  },
});

// Wrap store in middleware to Integrate with Redux DevTools (browser extension)
store = devtools(store, { name: "MiniDB Collection Store" });

// Wrap with middleware to allow subscriptionsF
store = subscribeWithSelector(store);

const useCollectionStore = create(store);
export default useCollectionStore;

// useCollectionStore.subscribe(
//   (state) => state,
//   (token) => {
//     console.log("trying!");
//     // useCollectionStore.setState((state) => ({
//     //   galleryFilter: new GalleryFilter({
//     //     speciesFilter: [],
//     //     archetypeFilter: [],
//     //     weaponFilter: [],
//     //     armorFilter: [],
//     //     paintedFilter: [],
//     //     nameFilter: [],
//     //     lineFilter: [],
//     //   }),
//     // }));
//   },
//   { equalityFn: shallow, fireImmediately: true }
// );

// - watch: on gallery filter object change or collection change (custom equality function: md5 the filters using object-hash (see useAggregation))
// - update filtered collection
// - update tag counts (?) (add states)
useCollectionStore.subscribe(
  (state) => [state.galleryFilter, state.entireCollection],
  (token) => {
    const [galleryFilter, entireCollection] = token;
    console.log("updating filteredCOllection", token);
    if (!galleryFilter) return;

    console.log("---updating filtered col");
    const filteredCollection = entireCollection.filter((item) => galleryFilter.includes(item));
    useCollectionStore.setState({ filteredCollection });
  },
  {
    equalityFn: shallow,
    // equalityFn: (oldValue, newValue) => {
    //   console.log("comparing", oldValue, objectHash(oldValue), newValue, objectHash(newValue));
    //   return objectHash(oldValue) === objectHash(newValue);
    // },
    fireImmediately: true,
  }
);
