import React, { useState, useEffect, useContext } from "react";
import { useLocalStorage, useSessionStorage } from "react-use-storage";
import useMiniatureCollection from "../../hooks/useMiniatureCollection";
import GalleryFilter from "./gallery_filter";
import useFilterState from "./useFilterState";

const defaultState = {
  raceFilter: "all",
  setRaceFilter: () => {},
  archetypeFilter: "all",
  setArchetypeFilter: () => {},
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
  const [raceFilter, setRaceFilter] = useFilterState("race", "all");
  const [archetypeFilter, setArchetypeFilter] = useFilterState("archetype", "all");
  const [weaponFilter, setWeaponFilter] = useFilterState("weapon", "all");
  const [armorFilter, setArmorFilter] = useFilterState("armor", "all");
  const [paintedFilter, setPaintedFilter] = useSessionStorage("painted-filter", "all");
  const [nameFilter, setNameFilter] = useSessionStorage("name-filter", "all");
  const [lineFilter, setLineFilter] = useFilterState("line", "all");
  const [filteredMiniatures, setFilteredMiniatures] = useState(collection);
  const [ignoreMonsters, setIgnoreMonsters] = useLocalStorage("switch-ignore-monsters", false);
  const [isFiltered, setIsFiltered] = useState(defaultState.isFiltered);

  // Set isFiltered state to if any of the filters are a value other than the default
  useEffect(() => {
    setIsFiltered(
      ignoreMonsters ||
        [raceFilter, archetypeFilter, weaponFilter, armorFilter, paintedFilter, lineFilter].some(
          (item) => item !== "all"
        )
    );
  }, [
    ignoreMonsters,
    raceFilter,
    archetypeFilter,
    weaponFilter,
    armorFilter,
    paintedFilter,
    lineFilter,
  ]);

  // Set the filteredMiniatures state with only minis matching the filters
  useEffect(() => {
    const applyFilter = () => {
      const galleryFilter = new GalleryFilter({
        raceFilter,
        archetypeFilter,
        weaponFilter,
        armorFilter,
        paintedFilter,
        nameFilter,
        lineFilter,
        ignoreMonsters,
      });

      return collection.filter((mini) => galleryFilter.includes(mini));
    };

    setFilteredMiniatures(applyFilter());
  }, [
    raceFilter,
    archetypeFilter,
    weaponFilter,
    armorFilter,
    paintedFilter,
    nameFilter,
    lineFilter,
    ignoreMonsters,
    collection,
  ]);

  // Assign context state
  const state = {
    raceFilter,
    setRaceFilter,
    archetypeFilter,
    setArchetypeFilter,
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
