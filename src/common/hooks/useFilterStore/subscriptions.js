import { useCollectionStore } from "@/common/hooks/useCollectionStore";

import extractFiltersFromToken from "./utils/subscriptions/extractFiltersFromToken";
import subscriptionOptions from "./utils/subscriptions/subscriptionOptions";
import watchAllFilters from "./utils/subscriptions/watchAllFilters";

/**
 * @see https://github.com/pmndrs/zustand#using-subscribe-with-selector
 */

export const updateIsFilteredWhenFiltersChange = (useFilterStore) => {
  useFilterStore.subscribe(
    watchAllFilters,
    (token, _previousToken) => useFilterStore.getState().triggers.updateIsFiltered(),
    subscriptionOptions
  );
};

export const updateGalleryFilterWhenFiltersChange = (useFilterStore) => {
  useFilterStore.subscribe(
    watchAllFilters,
    (token, _previousToken) => {
      const filters = extractFiltersFromToken(token);
      useCollectionStore.getState().triggers.updateGalleryFilter(filters);
    },
    subscriptionOptions
  );
};
