const extractFiltersFromToken = (token: (boolean | string[])[]) => {
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
