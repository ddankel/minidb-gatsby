import { create } from "zustand";
import { devtools } from "zustand/middleware";

import store from "./store";

let tagIndexStore = store;
tagIndexStore = devtools(tagIndexStore, { name: "MiniDB Tag Index Store" });

export const useTagIndexStore = create(tagIndexStore);

// Export hooks
export const useFilteredCollectionTagData = () =>
  useTagIndexStore((state) => state.filteredCollectionTagData);
export const useEntireCollectionTagData = () =>
  useTagIndexStore((state) => state.entireCollectionTagData);
export const useZippedCollectionTagData = () =>
  useTagIndexStore((state) => state.zippedCollectionTagData);
