class GalleryFilter {
  constructor({
    raceFilter,
    weaponFilter,
    armorFilter,
    paintedFilter,
    nameFilter,
    lineFilter,
    ignoreMonsters,
  }) {
    this.raceFilter = raceFilter;
    this.weaponFilter = weaponFilter;
    this.armorFilter = armorFilter;
    this.paintedFilter = paintedFilter;
    this.nameFilter = nameFilter;
    this.lineFilter = lineFilter;
    this.ignoreMonsters = ignoreMonsters;
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
      this._matchesFilter(frontmatter.status, this.paintedFilter || "painted") &&
      this._matchesLine(frontmatter.line)
    );
  }

  _matchesFilter(value, filter) {
    if (filter === "all") return true;
    if (!value) return false;

    value = [value].flat().map((item) => item.toLowerCase());
    filter = filter.toLowerCase();
    return value.includes(filter);
  }

  _matchesLine(value) {
    if (this.lineFilter === "all") return true;

    const compiledLine = [value || ""].flat().join(" > ");
    return compiledLine.startsWith(this.lineFilter);
  }

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
