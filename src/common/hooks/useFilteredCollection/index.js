import { useMemo } from "react";

import useMiniatureCollection from "@/common/hooks/useMiniatureCollection";
import useGalleryFilter from "./useGalleryFilter";

/**
 * All miniatures that match the current filter values
 *
 * The entire miniature collection is sourced from +useMiniatureCollection+
 * and the zustand store is referenced to determine filter states.
 *
 * @return  {Array}  Matching miniature pages
 */
const useFilteredCollection = () => {
  const fullCollection = useMiniatureCollection();
  const galleryFilter = useGalleryFilter();

  /**
   * Memoized application of GalleryFilter to the entire collection
   *
   * @return  {Array}  Filtered miniatures
   */
  const filteredCollection = useMemo(
    () => fullCollection.filter((mini) => galleryFilter.includes(mini)),
    [fullCollection, galleryFilter]
  );

  return filteredCollection;
};

export default useFilteredCollection;
