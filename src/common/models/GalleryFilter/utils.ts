import { intersection } from "lodash";

/**
 * If the miniature's frontmater includes all the currently set filter items
 *
 * If there are no tags in the filteredTags array that aren't already in
 * miniatureTags, then that means all the filtered tags are already assigned
 * to the miniature.  In other words, it matches the filter.
 */
export const matchesFilterAND = (miniatureTags: string[], filteredTags: string[]) => {
  return miniatureTags.length === [...new Set([...miniatureTags, ...filteredTags])].length;
};

/**
 * If the miniature's frontmater includes any the currently set filter items
 *
 * If there are no tags in the filteredTags array that aren't already in
 * miniatureTags, then that means all the filtered tags are already assigned
 * to the miniature.  In other words, it matches the filter.
 */
export const matchesFilterOR = (miniatureTags: string[], filteredTags: string[]) => {
  if (!filteredTags.length) return true;

  return !!intersection(miniatureTags, filteredTags).length;
};

/**
 * If the currently set miniature line filter matches the current miniature
 */
export const matchesLine = (miniatureFullLine: string, lineFilter: string[]) => {
  if (!lineFilter.length) return true;

  return lineFilter.some((line) => miniatureFullLine.startsWith(line));
};
