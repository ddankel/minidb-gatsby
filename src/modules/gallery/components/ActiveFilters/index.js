import React from "react";
import styled from "styled-components";
import _ from "lodash";

import { useFilterStoreItem } from "@/hooks/useFilterStore";
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
  const isFiltered = useFilterStoreItem("isFiltered");

  const speciesFilter = useFilterStoreItem("speciesFilter");
  const removeSpeciesFilter = useFilterStoreItem("removeSpeciesFilter");

  const archetypeFilter = useFilterStoreItem("archetypeFilter");
  const removeArchetypeFilter = useFilterStoreItem("removeArchetypeFilter");

  const weaponFilter = useFilterStoreItem("weaponFilter");
  const removeWeaponFilter = useFilterStoreItem("removeWeaponFilter");

  const armorFilter = useFilterStoreItem("armorFilter");
  const removeArmorFilter = useFilterStoreItem("removeArmorFilter");

  const lineFilter = useFilterStoreItem("lineFilter");
  const removeLineFilter = useFilterStoreItem("removeLineFilter");

  const paintedFilter = useFilterStoreItem("paintedFilter");
  const removePaintedFilter = useFilterStoreItem("removePaintedFilter");

  return (
    <BadgeContainer>
      {isFiltered() && <span>Active Filters:</span>}
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
    </BadgeContainer>
  );
};

export default ActiveFilters;
