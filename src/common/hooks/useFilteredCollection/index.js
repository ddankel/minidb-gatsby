import { useMemo, useCallback } from "react";
import useMiniatureCollection from "@/common/hooks/useMiniatureCollection";
import { useFilterStoreItem } from "@/common/hooks/useFilterStore";
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

  const speciesFilter = useFilterStoreItem("speciesFilter");
  const archetypeFilter = useFilterStoreItem("archetypeFilter");
  const weaponFilter = useFilterStoreItem("weaponFilter");
  const armorFilter = useFilterStoreItem("armorFilter");
  const paintedFilter = useFilterStoreItem("paintedFilter");
  const nameFilter = useFilterStoreItem("nameFilter");
  const lineFilter = useFilterStoreItem("lineFilter");
  const ignoreMonsters = useFilterStoreItem("ignoreMonsters");

  /**
   * Apply the filters to the provided collection
   *
   * @param   {Array}  collection  Collection of miniatures
   *
   * @return  {Array}              Only values of +collection+ matching the filters
   */
  const filterCollection = useCallback(
    (collection) => {
      const galleryFilter = new GalleryFilter({
        speciesFilter,
        archetypeFilter,
        weaponFilter,
        armorFilter,
        paintedFilter,
        nameFilter,
        lineFilter,
        ignoreMonsters,
      });

      return collection.filter((mini) => galleryFilter.includes(mini));
    },
    [
      speciesFilter,
      archetypeFilter,
      weaponFilter,
      armorFilter,
      paintedFilter,
      nameFilter,
      lineFilter,
      ignoreMonsters,
    ]
  );

  /**
   * Memoized application of GalleryFilter to the entire collection
   *
   * @return  {Array}  Filtered miniatures
   */
  const filteredCollection = useMemo(
    () => filterCollection(fullCollection),
    [fullCollection, filterCollection]
  );

  return filteredCollection;
};

export default useFilteredCollection;
