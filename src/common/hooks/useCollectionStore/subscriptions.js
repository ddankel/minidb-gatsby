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
    (state) => [state.galleryFilter, state.entireCollection],
    (token, _previousToken) => {
      const galleryFilter = token[0];
      if (!!galleryFilter) useCollectionStore.getState().triggers.filterCollection();
    },
    subscriptionOptions
  );
};

export const aggregateEntireCollectionTagsWhenCollectionChanges = (useCollectionStore) => {
  useCollectionStore.subscribe(
    (state) => state.entireCollection,
    (token, _previousToken) => {
      const entireCollection = token;
      if (!entireCollection) return;

      useAggregationStore.getState().triggers.aggregateEntireCollectionTags(entireCollection);
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
    (state) => [state.entireCollection, state.filteredCollection],
    (token, _previousToken) => {
      const [entireCollection, filteredCollection] = token;
      if (!entireCollection || !filteredCollection) return;

      useAggregationStore
        .getState()
        .triggers.aggregateZippedColelctionTags({ filteredCollection, entireCollection });
    },
    subscriptionOptions
  );
};
