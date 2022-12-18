import _ from "lodash";

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
    if (!this._matchesFilterAND(mini.raceTags, this.speciesFilter)) return false;
    if (!this._matchesFilterAND(mini.archetypeTags, this.archetypeFilter)) return false;
    if (!this._matchesFilterOR(mini.weaponTags, this.weaponFilter)) return false;
    if (!this._matchesFilterAND(mini.armorTags, this.armorFilter)) return false;
    if (!this._matchesLine(mini.fullLine)) return false;
    if (!this._matchesFilterOR([mini.paintedState], this.paintedFilter)) return false;

    return true;
  }

  /**
   * If the miniature's frontmater includes all the currently set filter items
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
  _matchesFilterAND(miniatureTags, filteredTags) {
    return miniatureTags.length === [...new Set([...miniatureTags, ...filteredTags])].length;
  }

  /**
   * If the miniature's frontmater includes any the currently set filter items
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
  _matchesFilterOR(miniatureTags, filteredTags) {
    if (!filteredTags.length) return true;

    return !!_.intersection(miniatureTags, filteredTags).length;
  }

  /**
   * If the currently set miniature line filter matches the current miniature
   *
   * @param   {String}  miniatureValue
   *
   * @return  {Boolean}
   */
  _matchesLine(miniatureFullLine) {
    if (!this.lineFilter.length) return true;

    return this.lineFilter.some((line) => miniatureFullLine.startsWith(line));
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
