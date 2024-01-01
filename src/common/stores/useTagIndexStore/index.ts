import { create } from "zustand";
import { devtools } from "zustand/middleware";

import { Collection } from "@/common/models/Collection";
import { TagIndex } from "@/common/models/TagIndex";

import { devtoolsOptions } from "./options";
import { TagIndexState } from "./types";

export const useTagIndexStore = create<TagIndexState>()(
  devtools(
    (set, get) => ({
      filteredCollectionTagData: {},
      entireCollectionTagData: {},
      zippedCollectionTagData: {},

      actions: {},

      triggers: {
        aggregateFilteredCollectionTags: (filteredCollectionData) => {
          const filteredCollection = new Collection(filteredCollectionData);
          const tagIndex = filteredCollection.indexTags();
          set({ filteredCollectionTagData: tagIndex.toHash() });
        },

        aggregateEntireCollectionTags: (entireCollectionData) => {
          const entireCollection = new Collection(entireCollectionData);
          const tagIndex = entireCollection.indexTags();
          set({ entireCollectionTagData: tagIndex.toHash() });
        },

        aggregateZippedCollectionTags: ({ filteredCollectionData, entireCollectionData }) => {
          const filteredTags = new Collection(filteredCollectionData).indexTags();
          const allTags = new Collection(entireCollectionData).indexTags();

          const zippedIndex = TagIndex.zipTogether(allTags, filteredTags);
          set({ zippedCollectionTagData: zippedIndex.toHash() });
        },
      },
    }),
    devtoolsOptions
  )
);

// Export hooks
export const useFilteredCollectionTagData = () =>
  useTagIndexStore((state) => state.filteredCollectionTagData);
export const useEntireCollectionTagData = () =>
  useTagIndexStore((state) => state.entireCollectionTagData);
export const useZippedCollectionTagData = () =>
  useTagIndexStore((state) => state.zippedCollectionTagData);
