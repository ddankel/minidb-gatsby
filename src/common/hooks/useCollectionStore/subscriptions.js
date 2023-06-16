import { shallow } from "zustand/shallow";
import { useAggregationStore } from "../useAggregationStore";

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
    {
      equalityFn: shallow,
      fireImmediately: true,
    }
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
    {
      equalityFn: shallow,
      fireImmediately: true,
    }
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
    {
      equalityFn: shallow,
      fireImmediately: true,
    }
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
    {
      equalityFn: shallow,
      fireImmediately: true,
    }
  );
};
