class GalleryFilter {
  constructor(args) {
    this.speciesFilter = args.speciesFilter;
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
    if (!this._matchesFilter(mini.raceTags, this.speciesFilter)) return false;

    return true;

    // return (
    //   !this._isFilteredMonster(mini.raceTags) &&
    //   this._matchesFilter(mini.name, this.nameFilter) &&
    //   this._matchesFilter(mini.armorTags, this.armorFilter) &&
    //   this._matchesFilter(mini.weaponTags, this.weaponFilter) &&
    //   this._matchesFilter(mini.raceTags, this.speciesFilter) &&
    //   this._matchesFilter(mini.archetypeTags, this.archetypeFilter) &&
    //   this._matchesFilter(mini.paintedState, this.paintedFilter) &&
    //   this._matchesLine(mini.fullLine)
    // );
  }

  /**
   * If the currently set filter value includes the miniature's frontmater value
   *
   * If there are no tags in the filteredTags array that aren't already in
   * miniatureTags, then that means all the filtered tags are already assigned
   * to the miniature.  In other words, it matches the filter.
   *
   * @param   {Array}  miniatureTags    Tags on the miniature to check
   * @param   {Array}  filteredTags     Tags to filter on
   *
   * @return  {Boolean}
   */
  _matchesFilter(miniatureTags, filteredTags) {
    return miniatureTags.length === [...new Set([...miniatureTags, ...filteredTags])].length;
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

    return miniatureValue.startsWith(this.lineFilter);
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
