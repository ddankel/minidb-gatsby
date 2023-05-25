import { shallow } from "zustand/shallow";
import useCollectionStore from "@/common/hooks/useCollectionStore";
import GalleryFilter from "@/common/hooks/useFilteredCollection/GalleryFilter";

/**
 * Watch miniature filters for change
 *
 * If a filter changes:
 * - the collection store's instance of GalleryFilter is updated
 * - this store's isFiltered flag is updated with if there are any active
 *   filters applied
 *
 * example usage:
 *   useFilterStore.subscribe(...watchFilters(useFilterStore));
 *
 * @see https://github.com/pmndrs/zustand#using-subscribe-with-selector
 */
const watchFilters = (useThisStore) => [watchedToken, onChange(useThisStore), subscriptionOptions];
export default watchFilters;

/**
 * Watch all of the filters for changes
 *
 * Must be a function that accepts the store's current state as an argument
 */
const watchedToken = (state) => [
  state.speciesFilter,
  state.archetypeFilter,
  state.weaponFilter,
  state.armorFilter,
  state.paintedFilter,
  state.nameFilter,
  state.lineFilter,
  state.ignoreMonsters,
];

/**
 * Actions to perform on change
 */
const onChange = (useThisStore) => (token, _previousToken) => {
  const [
    speciesFilter,
    archetypeFilter,
    weaponFilter,
    armorFilter,
    paintedFilter,
    nameFilter,
    lineFilter,
    ignoreMonsters,
  ] = token;

  const arrayFilters = [
    speciesFilter,
    archetypeFilter,
    weaponFilter,
    armorFilter,
    paintedFilter,
    nameFilter,
    lineFilter,
  ];

  const isFiltered = arrayFilters.some((item) => !!item.length);

  useThisStore.setState({ isFiltered });
  useCollectionStore.setState({
    galleryFilter: new GalleryFilter({
      speciesFilter,
      archetypeFilter,
      weaponFilter,
      armorFilter,
      paintedFilter,
      nameFilter,
      lineFilter,
      ignoreMonsters,
    }),
  });
};

const subscriptionOptions = {
  equalityFn: shallow,
  fireImmediately: true,
};
