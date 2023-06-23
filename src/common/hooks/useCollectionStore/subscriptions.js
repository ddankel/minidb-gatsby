import { shallow } from "zustand/shallow";
import { useAggregationStore } from "../useAggregationStore";
import { useTagIndexStore } from "../useTagIndexStore";

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
      useTagIndexStore.getState().triggers.aggregateEntireCollectionTags(entireCollectionData);
    },
    subscriptionOptions
  );
};

export const aggregateFilteredCollectionTagsWhenCollectionChanges = (useCollectionStore) => {
  useCollectionStore.subscribe(
    (state) => state.filteredCollectionData,
    (token, _previousToken) => {
      const filteredCollectionData = token;
      if (!filteredCollectionData) return;

      useAggregationStore
        .getState()
        .triggers.aggregateFilteredCollectionTags(filteredCollectionData);

      useTagIndexStore.getState().triggers.aggregateFilteredCollectionTags(filteredCollectionData);
    },
    subscriptionOptions
  );
};

export const aggregateZippedCollectionTagsWhenCollectionChanges = (useCollectionStore) => {
  useCollectionStore.subscribe(
    (state) => [state.entireCollectionData, state.filteredCollectionData],
    (token, _previousToken) => {
      const [entireCollectionData, filteredCollectionData] = token;
      if (!entireCollectionData || !filteredCollectionData) return;

      useAggregationStore
        .getState()
        .triggers.aggregateZippedColelctionTags({ filteredCollectionData, entireCollectionData });

      useTagIndexStore
        .getState()
        .triggers.aggregateZippedColelctionTags({ filteredCollectionData, entireCollectionData });
    },
    subscriptionOptions
  );
};
