const watchAllFilters = (state) => [
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
