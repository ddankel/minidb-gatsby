import { intersection } from "lodash";

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
export const matchesFilterAND = (miniatureTags, filteredTags) => {
  return miniatureTags.length === [...new Set([...miniatureTags, ...filteredTags])].length;
};

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
export const matchesFilterOR = (miniatureTags, filteredTags) => {
  if (!filteredTags.length) return true;

  return !!intersection(miniatureTags, filteredTags).length;
};

/**
 * If the currently set miniature line filter matches the current miniature
 *
 * @param   {String}  miniatureValue
 *
 * @return  {Boolean}
 */
export const matchesLine = (miniatureFullLine, lineFilter) => {
  if (!lineFilter.length) return true;

  return lineFilter.some((line) => miniatureFullLine.startsWith(line));
};

/**
 * If the current miniature is a "monsterous race"
 *
 * @param   {String}  race
 *
 * @return  {Boolean}
 */
export const isFilteredMonster = (race) => {
  if (!this.ignoreMonsters) return false;

  const jsonRace = JSON.stringify(race);
  return (
    jsonRace === JSON.stringify(["dragonspawn"]) ||
    jsonRace === JSON.stringify(["golem"]) ||
    jsonRace === JSON.stringify(["lupine"]) ||
    race?.some((item) => ["warjack"].includes(item))
  );
};
