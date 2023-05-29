import { last } from "lodash";

import BadgeButton from "@/common/components/BadgeButton";
import {
  useArchetypeFilter,
  useArmorFilter,
  useFilterActions,
  useIsFiltered,
  useLineFilter,
  usePaintedFilter,
  useSpeciesFilter,
  useWeaponFilter,
} from "@/common/hooks/useFilterStore";

import BadgeContainer from "./components/BadgeContainer";
import FilterBadge from "./components/FilterBadge";
import useShowReset from "./hooks/useShowReset";

const ActiveFilters = () => {
  const isFiltered = useIsFiltered();

  const speciesFilter = useSpeciesFilter();
  const archetypeFilter = useArchetypeFilter();
  const weaponFilter = useWeaponFilter();
  const armorFilter = useArmorFilter();
  const lineFilter = useLineFilter();
  const paintedFilter = usePaintedFilter();

  const {
    removeSpeciesFilter,
    removeArchetypeFilter,
    removeWeaponFilter,
    removeArmorFilter,
    removeLineFilter,
    removePaintedFilter,
    resetFilters,
  } = useFilterActions();

  const showReset = useShowReset();

  return (
    <BadgeContainer>
      {isFiltered && <span>Active Filters:</span>}
      {speciesFilter.map((tag) => (
        <FilterBadge key={tag} text={tag} onClick={() => removeSpeciesFilter(tag)} />
      ))}
      {archetypeFilter.map((tag) => (
        <FilterBadge key={tag} text={tag} onClick={() => removeArchetypeFilter(tag)} />
      ))}
      {weaponFilter.map((tag) => (
        <FilterBadge key={tag} text={tag} onClick={() => removeWeaponFilter(tag)} />
      ))}
      {armorFilter.map((tag) => (
        <FilterBadge key={tag} text={tag} onClick={() => removeArmorFilter(tag)} />
      ))}
      {lineFilter.map((tag) => (
        <FilterBadge
          key={tag}
          text={last(tag.split(" > "))}
          onClick={() => removeLineFilter(tag)}
        />
      ))}
      {paintedFilter.map((tag) => (
        <FilterBadge key={tag} text={tag} onClick={() => removePaintedFilter(tag)} />
      ))}
      {showReset && (
        <BadgeButton onClick={resetFilters} variant="primary">
          Clear All
        </BadgeButton>
      )}
    </BadgeContainer>
  );
};

export default ActiveFilters;
