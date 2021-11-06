import { useState, useEffect } from "react";

function useMiniatureFilter(collection) {
  const [raceFilter, setRaceFilter] = useState("all");
  const [weaponFilter, setWeaponFilter] = useState("all");
  const [armorFilter, setArmorFilter] = useState("all");
  const [paintedFilter, setPaintedFilter] = useState("all");
  const [nameFilter, setNameFilter] = useState("all");
  const [lineFilter, setLineFilter] = useState("all");
  const [filteredMiniatures, setFilteredMiniatures] = useState(collection);

  useEffect(() => {
    setFilteredMiniatures(applyFilter());
  }, [raceFilter, weaponFilter, armorFilter, paintedFilter, nameFilter, lineFilter]);

  const allOrMatchesFilter = ({ value, filter }) => {
    value = [value || ""].flat().map((item) => item.toLowerCase());
    filter = filter.toLowerCase();

    return filter === "all" || value.includes(filter);
  };

  const applyFilter = () => {
    return collection.filter((mini) => {
      return (
        allOrMatchesFilter({ value: mini.frontmatter.race, filter: raceFilter }) &&
        allOrMatchesFilter({ value: mini.frontmatter.weapons, filter: weaponFilter }) &&
        allOrMatchesFilter({ value: mini.frontmatter.armor, filter: armorFilter }) &&
        allOrMatchesFilter({
          value: mini.frontmatter.is_painted || "painted",
          filter: paintedFilter,
        }) &&
        allOrMatchesFilter({ value: mini.frontmatter.name, filter: nameFilter }) &&
        allOrMatchesFilter({ value: mini.frontmatter.line, filter: lineFilter })
      );
    });
  };

  return {
    raceFilter,
    setRaceFilter,
    weaponFilter,
    setWeaponFilter,
    armorFilter,
    setArmorFilter,
    paintedFilter,
    setPaintedFilter,
    nameFilter,
    setNameFilter,
    lineFilter,
    setLineFilter,
    filteredMiniatures,
  };
}

export default useMiniatureFilter;
