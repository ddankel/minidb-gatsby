import { useMemo, useCallback } from "react";
import useMiniatureCollection from "@/hooks/useMiniatureCollection";
// import { useFilterStoreItem } from "@/hooks/useFilterStore";
import GalleryFilter from "./GalleryFilter";

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

  // const raceFilter = useFilterStoreItem("raceFilter");
  // const archetypeFilter = useFilterStoreItem("archetypeFilter");
  // const weaponFilter = useFilterStoreItem("weaponFilter");
  // const armorFilter = useFilterStoreItem("armorFilter");
  // const paintedFilter = useFilterStoreItem("paintedFilter");
  // const nameFilter = useFilterStoreItem("nameFilter");
  // const lineFilter = useFilterStoreItem("lineFilter");
  // const ignoreMonsters = useFilterStoreItem("ignoreMonsters");

  // /**
  //  * Apply the filters to the provided collection
  //  *
  //  * @param   {Array}  collection  Collection of miniatures
  //  *
  //  * @return  {Array}              Only values of +collection+ matching the filters
  //  */
  // const filterCollection = useCallback(
  //   (collection) => {
  //     const galleryFilter = new GalleryFilter({
  //       raceFilter,
  //       archetypeFilter,
  //       weaponFilter,
  //       armorFilter,
  //       paintedFilter,
  //       nameFilter,
  //       lineFilter,
  //       ignoreMonsters,
  //     });

  //     return collection.filter((mini) => galleryFilter.includes(mini));
  //   },
  //   [
  //     raceFilter,
  //     archetypeFilter,
  //     weaponFilter,
  //     armorFilter,
  //     paintedFilter,
  //     nameFilter,
  //     lineFilter,
  //     ignoreMonsters,
  //   ]
  // );

  // /**
  //  * Memoized application of GalleryFilter to the entire collection
  //  *
  //  * @return  {Array}  Filtered miniatures
  //  */
  // const filteredCollection = useMemo(
  //   () => filterCollection(fullCollection),
  //   [fullCollection, filterCollection]
  // );
  //
  // return filteredCollection;

  // TEMP:
  return fullCollection;
};

export default useFilteredCollection;
