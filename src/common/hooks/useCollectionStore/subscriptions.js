import { shallow } from "zustand/shallow";

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
