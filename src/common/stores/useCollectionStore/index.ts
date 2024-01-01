import { create } from "zustand";
import { devtools, subscribeWithSelector } from "zustand/middleware";

import { GalleryFilter } from "@/common/models/GalleryFilter";
import { shallow } from "zustand/shallow";
import { useTagIndexStore } from "../useTagIndexStore";
import { CollectionState } from "./types";

export const useCollectionStore = create<CollectionState>()(
  devtools(
    subscribeWithSelector((set, get) => ({
      entireCollectionData: [],
      filteredCollectionData: [],
      galleryFilter: undefined,

      actions: {
        setEntireCollection: (value) => set({ entireCollectionData: value }),
        setFilteredCollection: (value) => set({ filteredCollectionData: value }),
      },

      triggers: {
        filterCollection: () => {
          const galleryFilter = get().galleryFilter;
          if (!galleryFilter) return;

          const filteredCollectionData = get().entireCollectionData.filter((item) =>
            galleryFilter.includes(item)
          );
          set({ filteredCollectionData });
        },

        updateGalleryFilter: (filters) => set({ galleryFilter: new GalleryFilter(filters) }),
      },
    })),
    { name: "MiniDB Collection Store" }
  )
);

/**
 * Add Subscriptions
 *
 * @source https://github.com/pmndrs/zustand#using-subscribe-with-selector
 */

const subscriptionOptions = {
  equalityFn: shallow,
  fireImmediately: true,
};

useCollectionStore.subscribe(
  (state) => [state.galleryFilter, state.entireCollectionData],
  (token, _previousToken) => {
    const galleryFilter = token[0];
    if (!!galleryFilter) useCollectionStore.getState().triggers.filterCollection();
  },
  subscriptionOptions
);

useCollectionStore.subscribe(
  (state) => state.entireCollectionData,
  (token, _previousToken) => {
    const entireCollectionData = token;
    if (!entireCollectionData) return;

    useTagIndexStore.getState().triggers.aggregateEntireCollectionTags(entireCollectionData);
  },
  subscriptionOptions
);

useCollectionStore.subscribe(
  (state) => state.filteredCollectionData,
  (token, _previousToken) => {
    const filteredCollectionData = token;
    if (!filteredCollectionData) return;

    useTagIndexStore.getState().triggers.aggregateFilteredCollectionTags(filteredCollectionData);
  },
  subscriptionOptions
);

useCollectionStore.subscribe(
  (state) => [state.entireCollectionData, state.filteredCollectionData],
  (token, _previousToken) => {
    const [entireCollectionData, filteredCollectionData] = token;
    if (!entireCollectionData || !filteredCollectionData) return;

    useTagIndexStore
      .getState()
      .triggers.aggregateZippedCollectionTags({ filteredCollectionData, entireCollectionData });
  },
  subscriptionOptions
);

// Export hooks
export const useEntireCollectionData = () =>
  useCollectionStore((state) => state.entireCollectionData);
export const useGalleryFilter = () => useCollectionStore((state) => state.galleryFilter);
export const useFilteredCollectionData = () =>
  useCollectionStore((state) => state.filteredCollectionData);

export const useCollectionActions = () => useCollectionStore((state) => state.actions);
