import React, { useMemo } from "react";
import styled from "styled-components";
import _ from "lodash";

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

import FilterBadge from "./FilterBadge";

const BadgeContainer = styled("div")`
  && {
    display: flex;
    flex-wrap: wrap;
    gap: 0.25rem 0.75rem;
    align-items: center;
    margin-left: 1rem;
    margin-bottom: 1.5rem;
  }
`;

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

  const showReset = useMemo(() => {
    const filters = [
      speciesFilter,
      archetypeFilter,
      weaponFilter,
      armorFilter,
      lineFilter,
      paintedFilter,
    ];
    const filterCount = _.sum(filters.map((filterArray) => filterArray.length));

    return filterCount > 1;
  }, [speciesFilter, archetypeFilter, weaponFilter, armorFilter, lineFilter, paintedFilter]);

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
          text={_.last(tag.split(" > "))}
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
