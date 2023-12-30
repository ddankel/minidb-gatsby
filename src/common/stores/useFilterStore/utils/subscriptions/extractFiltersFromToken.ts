import { FilterToken } from "../../types";

const extractFiltersFromToken = (token: FilterToken) => {
  const [
    genreFilter,
    speciesFilter,
    archetypeFilter,
    weaponFilter,
    armorFilter,
    paintedFilter,
    nameFilter,
    lineFilter,
    ignoreMonsters,
  ] = token;

  return {
    genreFilter,
    speciesFilter,
    archetypeFilter,
    weaponFilter,
    armorFilter,
    paintedFilter,
    nameFilter,
    lineFilter,
    ignoreMonsters,
  };
};

export default extractFiltersFromToken;
