import React, { useState, useEffect, useContext } from "react";
import { useSessionStorage } from "react-use-storage";
import useMiniatureCollection from "../../hooks/useMiniatureCollection";
import GalleryFilter from "./gallery_filter";

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
  const [isFiltered, setIsFiltered] = useState(defaultState.isFiltered);

  // Set isFiltered state to if any of the filters are a value other than the default
  useEffect(() => {
    setIsFiltered(
      ignoreMonsters ||
        [raceFilter, weaponFilter, armorFilter, paintedFilter, lineFilter].some(
          (item) => item !== "all"
        )
    );
  }, [ignoreMonsters, raceFilter, weaponFilter, armorFilter, paintedFilter, lineFilter]);

  // Set the filteredMiniatures state with only minis matching the filters
  useEffect(() => {
    const applyFilter = () => {
      const galleryFilter = new GalleryFilter({
        raceFilter,
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
