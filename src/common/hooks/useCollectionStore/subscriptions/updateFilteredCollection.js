import { shallow } from "zustand/shallow";

/**
 * Watch the gallery and update the filtered collection on filter change
 *
 * example usage:
 *   useCollectionStore.subscribe(...updateFilteredCollection(useCollectionStore));
 *
 * @see https://github.com/pmndrs/zustand#using-subscribe-with-selector
 */
const updateFilteredCollection = (useThisStore) => [
  watchedToken,
  onChange(useThisStore),
  subscriptionOptions,
];
export default updateFilteredCollection;

/**
 * Watch the GalleryFilter object and the entireCollection for changes
 */
const watchedToken = (state) => [state.galleryFilter, state.entireCollection];

/**
 * Actions to perform on change
 */
const onChange = (useThisStore) => (token, _previousToken) => {
  const [galleryFilter, entireCollection] = token;
  console.log("updating filteredCOllection", token);
  if (!galleryFilter) return;

  console.log("---updating filtered col");
  const filteredCollection = entireCollection.filter((item) => galleryFilter.includes(item));
  useThisStore.setState({ filteredCollection });
};

const subscriptionOptions = {
  equalityFn: shallow,
  fireImmediately: true,
};
