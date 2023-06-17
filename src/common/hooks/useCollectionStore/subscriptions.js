import { shallow } from "zustand/shallow";
import { useAggregationStore } from "../useAggregationStore";

const subscriptionOptions = {
  equalityFn: shallow,
  fireImmediately: true,
};

/**
 * @see https://github.com/pmndrs/zustand#using-subscribe-with-selector
 */

export const filterCollectionWhenFiltersChange = (useCollectionStore) => {
  useCollectionStore.subscribe(
    (state) => [state.galleryFilter, state.entireCollectionData],
    (token, _previousToken) => {
      const galleryFilter = token[0];
      if (!!galleryFilter) useCollectionStore.getState().triggers.filterCollection();
    },
    subscriptionOptions
  );
};

export const aggregateEntireCollectionTagsWhenCollectionChanges = (useCollectionStore) => {
  useCollectionStore.subscribe(
    (state) => state.entireCollectionData,
    (token, _previousToken) => {
      const entireCollectionData = token;
      if (!entireCollectionData) return;

      useAggregationStore.getState().triggers.aggregateEntireCollectionTags(entireCollectionData);
    },
    subscriptionOptions
  );
};

export const aggregateFilteredCollectionTagsWhenCollectionChanges = (useCollectionStore) => {
  useCollectionStore.subscribe(
    (state) => state.filteredCollection,
    (token, _previousToken) => {
      const filteredCollection = token;
      if (!filteredCollection) return;

      useAggregationStore.getState().triggers.aggregateFilteredCollectionTags(filteredCollection);
    },
    subscriptionOptions
  );
};

export const aggregateZippedCollectionTagsWhenCollectionChanges = (useCollectionStore) => {
  useCollectionStore.subscribe(
    (state) => [state.entireCollectionData, state.filteredCollection],
    (token, _previousToken) => {
      const [entireCollectionData, filteredCollection] = token;
      if (!entireCollectionData || !filteredCollection) return;

      useAggregationStore
        .getState()
        .triggers.aggregateZippedColelctionTags({ filteredCollection, entireCollectionData });
    },
    subscriptionOptions
  );
};
