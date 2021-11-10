import { useState, useEffect } from "react";
import useLocalStorage from "./useLocalStorage";

function useMiniatureFilter(collection) {
  const [raceFilter, setRaceFilter] = useLocalStorage("race-filter", "all");
  const [weaponFilter, setWeaponFilter] = useLocalStorage("weapon-filter", "all");
  const [armorFilter, setArmorFilter] = useLocalStorage("armor-filter", "all");
  const [paintedFilter, setPaintedFilter] = useLocalStorage("painted-filter", "all");
  const [nameFilter, setNameFilter] = useLocalStorage("name-filter", "all");
  const [lineFilter, setLineFilter] = useLocalStorage("line-filter", "All");
  const [filteredMiniatures, setFilteredMiniatures] = useState(collection);
  const [ignoreMonsters, setIgnoreMonsters] = useLocalStorage("switch-ignore-monsters", false);

  useEffect(() => {
    const applyFilter = () => {
      return collection.filter((mini) => {
        return (
          (!ignoreMonsters || !isMonster(mini)) &&
          allOrMatchesFilter({ value: mini.frontmatter.race, filter: raceFilter }) &&
          allOrMatchesFilter({ value: mini.frontmatter.weapons, filter: weaponFilter }) &&
          allOrMatchesFilter({ value: mini.frontmatter.armor, filter: armorFilter }) &&
          allOrMatchesFilter({
            value: mini.frontmatter.is_painted || "painted",
            filter: paintedFilter,
          }) &&
          allOrMatchesFilter({ value: mini.frontmatter.name, filter: nameFilter }) &&
          matchesLine({ value: mini.frontmatter.line, filter: lineFilter })
        );
      });
    };

    setFilteredMiniatures(applyFilter());
  }, [
    raceFilter,
    weaponFilter,
    armorFilter,
    paintedFilter,
    nameFilter,
    lineFilter,
    ignoreMonsters,
    collection,
  ]);

  const isMonster = (mini) => {
    return (
      JSON.stringify(mini.frontmatter.race) === JSON.stringify(["dragonspawn"]) ||
      mini.frontmatter.race?.some((item) => ["golem", "warjack"].includes(item))
    );
  };

  const allOrMatchesFilter = ({ value, filter }) => {
    value = [value || ""].flat().map((item) => item.toLowerCase());
    filter = filter.toLowerCase();
    return filter === "all" || value.includes(filter);
  };

  const matchesLine = ({ value, filter }) => {
    if (filter === "all") return true;

    const compiledLine = [value || ""].flat().join(" > ");
    return compiledLine.startsWith(filter);
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
    ignoreMonsters,
    setIgnoreMonsters,
    filteredMiniatures,
  };
}

export default useMiniatureFilter;
