import { useMemo } from "react";

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
const useGalleryFilter = () => {
  const speciesFilter = useFilterStoreItem("speciesFilter");
  const archetypeFilter = useFilterStoreItem("archetypeFilter");
  const weaponFilter = useFilterStoreItem("weaponFilter");
  const armorFilter = useFilterStoreItem("armorFilter");
  const paintedFilter = useFilterStoreItem("paintedFilter");
  const nameFilter = useFilterStoreItem("nameFilter");
  const lineFilter = useFilterStoreItem("lineFilter");
  const ignoreMonsters = useFilterStoreItem("ignoreMonsters");

  const galleryFilter = useMemo(
    () =>
      new GalleryFilter({
        speciesFilter,
        archetypeFilter,
        weaponFilter,
        armorFilter,
        paintedFilter,
        nameFilter,
        lineFilter,
        ignoreMonsters,
      }),
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

  return galleryFilter;
};

export default useGalleryFilter;
