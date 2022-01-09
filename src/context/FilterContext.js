import React, { useState, useEffect, useContext } from "react";
import { useSessionStorage } from "react-use-storage";
import useMiniatureCollection from "../hooks/useMiniatureCollection";

const defaultState = {
  raceFilter: "all",
  setRaceFilter: () => {},
  weaponFilter: "all",
  setWeaponFilter: () => {},
  armorFilter: "all",
  setArmorFilter: () => {},
  paintedFilter: "all",
  setPaintedFilter: () => {},
  nameFilter: "all",
  setNameFilter: () => {},
  lineFilter: "all",
  setLineFilter: () => {},
  ignoreMonsters: false,
  setIgnoreMonsters: () => {},
  filteredMiniatures: [],
  isFiltered: false,
};

export const FilterContext = React.createContext(defaultState);
export const useFilterContext = () => useContext(FilterContext);

export const FilterProvider = (props) => {
  const collection = useMiniatureCollection();
  const [raceFilter, setRaceFilter] = useSessionStorage("race-filter", "all");
  const [weaponFilter, setWeaponFilter] = useSessionStorage("weapon-filter", "all");
  const [armorFilter, setArmorFilter] = useSessionStorage("armor-filter", "all");
  const [paintedFilter, setPaintedFilter] = useSessionStorage("painted-filter", "all");
  const [nameFilter, setNameFilter] = useSessionStorage("name-filter", "all");
  const [lineFilter, setLineFilter] = useSessionStorage("line-filter", "all");
  const [filteredMiniatures, setFilteredMiniatures] = useState(collection);
  const [ignoreMonsters, setIgnoreMonsters] = useSessionStorage("switch-ignore-monsters", false);

  useEffect(() => {
    const applyFilter = () => {
      return collection.filter((mini) => {
        return (
          (!ignoreMonsters || !isMonster(mini)) &&
          allOrMatchesFilter({ value: mini.frontmatter.race, filter: raceFilter }) &&
          allOrMatchesFilter({ value: mini.frontmatter.weapons, filter: weaponFilter }) &&
          allOrMatchesFilter({ value: mini.frontmatter.armor, filter: armorFilter }) &&
          allOrMatchesFilter({
            value: mini.frontmatter.status || "painted",
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
    const jsonRace = JSON.stringify(mini.frontmatter.race);

    return (
      jsonRace === JSON.stringify(["dragonspawn"]) ||
      jsonRace === JSON.stringify(["golem"]) ||
      mini.frontmatter.race?.some((item) => ["warjack"].includes(item))
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

  const isFiltered =
    ignoreMonsters ||
    [raceFilter, weaponFilter, armorFilter, paintedFilter, lineFilter].some(
      (item) => item !== "all"
    );

  const state = {
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
    isFiltered,
  };

  return <FilterContext.Provider value={state}>{props.children}</FilterContext.Provider>;
};
