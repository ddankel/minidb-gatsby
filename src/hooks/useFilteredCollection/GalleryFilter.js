class GalleryFilter {
  constructor(args) {
    this.raceFilter = args.raceFilter;
    this.archetypeFilter = args.archetypeFilter;
    this.weaponFilter = args.weaponFilter;
    this.armorFilter = args.armorFilter;
    this.paintedFilter = args.paintedFilter;
    this.nameFilter = args.nameFilter;
    this.lineFilter = args.lineFilter;
    this.ignoreMonsters = args.ignoreMonsters;
  }

  /**
   * If the provided mini matches the filter criteria
   *
   * The mini can be an entire miniature record or just the frontmatter
   *
   * @param   {Object}  mini  The mini to check against the filters
   *
   * @return  {Boolean}
   */
  includes(mini) {
    const frontmatter = mini.frontmatter ? mini.frontmatter : mini;

    return (
      !this._isFilteredMonster(frontmatter.race) &&
      this._matchesFilter(frontmatter.name, this.nameFilter) &&
      this._matchesFilter(frontmatter.armor, this.armorFilter) &&
      this._matchesFilter(frontmatter.weapons, this.weaponFilter) &&
      this._matchesFilter(frontmatter.race, this.raceFilter) &&
      this._matchesFilter(frontmatter.archetype, this.archetypeFilter) &&
      this._matchesFilter(frontmatter.status || "painted", this.paintedFilter) &&
      this._matchesLine(frontmatter.line)
    );
  }

  /**
   * If the currently set filter value includes the miniature's frontmater value
   *
   * @param   {String}  miniatureValue
   * @param   {String}  filterValue
   *
   * @return  {Boolean}
   */
  _matchesFilter(miniatureValue, filterValue) {
    if (filterValue === "all") return true;
    if (!miniatureValue) return false;

    miniatureValue = [miniatureValue].flat().map((item) => item.toLowerCase());
    filterValue = filterValue.toLowerCase();
    return miniatureValue.includes(filterValue);
  }

  /**
   * If the currently set miniature line filter matches the current miniature
   *
   * @param   {String}  miniatureValue
   *
   * @return  {Boolean}
   */
  _matchesLine(miniatureValue) {
    if (this.lineFilter === "all") return true;

    const compiledLine = [miniatureValue || ""].flat().join(" > ");
    return compiledLine.startsWith(this.lineFilter);
  }

  /**
   * If the current miniature is a "monsterous race"
   *
   * @param   {String}  race
   *
   * @return  {Boolean}
   */
  _isFilteredMonster(race) {
    if (!this.ignoreMonsters) return false;

    const jsonRace = JSON.stringify(race);
    return (
      jsonRace === JSON.stringify(["dragonspawn"]) ||
      jsonRace === JSON.stringify(["golem"]) ||
      jsonRace === JSON.stringify(["lupine"]) ||
      race?.some((item) => ["warjack"].includes(item))
    );
  }
}

export default GalleryFilter;