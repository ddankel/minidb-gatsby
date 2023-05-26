import { sum } from "lodash";
import {
  useArchetypeFilter,
  useArmorFilter,
  useLineFilter,
  usePaintedFilter,
  useSpeciesFilter,
  useWeaponFilter,
} from "@/common/hooks/useFilterStore";

const useShowReset = () => {
  const speciesFilter = useSpeciesFilter();
  const archetypeFilter = useArchetypeFilter();
  const weaponFilter = useWeaponFilter();
  const armorFilter = useArmorFilter();
  const lineFilter = useLineFilter();
  const paintedFilter = usePaintedFilter();

  const filters = [
    speciesFilter,
    archetypeFilter,
    weaponFilter,
    armorFilter,
    lineFilter,
    paintedFilter,
  ];

  const filterCount = sum(filters.map((filterArray) => filterArray.length));

  const showReset = filterCount > 1;

  return showReset;
};

export default useShowReset;
