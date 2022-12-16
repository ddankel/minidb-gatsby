import React from "react";
import _ from "lodash";

import { useFilterStoreState } from "@/hooks/useFilterStore";
import FilterBadge from "./FilterBadge";

const ActiveFilters = () => {
  const [speciesFilter, setSpeciesFilter] = useFilterStoreState("speciesFilter");

  const handleClick = (val) => {
    setSpeciesFilter(_.without(speciesFilter, val));
  };

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "0.25rem 0.75rem",
        alignItems: "center",
        marginLeft: "1rem",
        marginBottom: "1.5rem",
      }}
    >
      {!!speciesFilter.length && <span>Active Filters:</span>}
      {speciesFilter.map((tag) => (
        <FilterBadge key={tag} text={tag} onClick={handleClick} />
      ))}
    </div>
  );
};

export default ActiveFilters;
