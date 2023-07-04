import { matchesFilterAND, matchesFilterOR, matchesLine } from "./utils";

class GalleryFilter {
  constructor(args) {
    this.genreFilter = args.genreFilter;
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
    if (!matchesFilterAND(mini.genreTags, this.genreFilter)) return false;
    if (!matchesFilterAND(mini.raceTags, this.speciesFilter)) return false;
    if (!matchesFilterAND(mini.archetypeTags, this.archetypeFilter)) return false;
    if (!matchesFilterAND(mini.weaponTags, this.weaponFilter)) return false;
    if (!matchesFilterAND(mini.armorTags, this.armorFilter)) return false;
    if (!matchesLine(mini.fullLine, this.lineFilter)) return false;
    if (!matchesFilterOR([mini.paintedState], this.paintedFilter)) return false;

    return true;
  }
}

export default GalleryFilter;
