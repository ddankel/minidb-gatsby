import { shallow } from "zustand/shallow";
import useCollectionStore from "@/common/hooks/useCollectionStore";
import GalleryFilter from "@/common/models/GalleryFilter";

const extractFiltersFromToken = (token) => {
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

  return {
    speciesFilter,
    archetypeFilter,
    weaponFilter,
    armorFilter,
    paintedFilter,
    nameFilter,
    lineFilter,
    ignoreMonsters,
  };
};

export default extractFiltersFromToken;
