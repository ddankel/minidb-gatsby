import { FilterState } from "../../types";

const watchAllFilters = (state: FilterState) => [
  state.genreFilter,
  state.speciesFilter,
  state.archetypeFilter,
  state.weaponFilter,
  state.armorFilter,
  state.paintedFilter,
  state.nameFilter,
  state.lineFilter,
  state.ignoreMonsters,
];
export default watchAllFilters;
