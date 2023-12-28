import { Miniature } from "../Miniature";
import { matchesFilterAND, matchesFilterOR, matchesLine } from "./utils";

type GalleryFilterData = {
  genreFilter: string[];
  speciesFilter: string[];
  archetypeFilter: string[];
  weaponFilter: string[];
  armorFilter: string[];
  paintedFilter: string[];
  nameFilter: string[];
  lineFilter: string[];
  ignoreMonsters: string[];
};

class GalleryFilter {
  public genreFilter;
  public speciesFilter;
  public archetypeFilter;
  public weaponFilter;
  public armorFilter;
  public paintedFilter;
  public nameFilter;
  public lineFilter;
  public ignoreMonsters;

  constructor(args: GalleryFilterData) {
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
   */
  includes(mini: Miniature) {
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
