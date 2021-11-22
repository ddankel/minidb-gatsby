import { useState } from "react";

/**
 * Aggregate the specified attribute tag (frontmatter) for all miniatures
 *
 * @param   {Array}   minis      Miniatures to aggregate
 * @param   {String}  attribute  Attribute key to aggregate
 *
 * @return  {Array}              Unique, sorted array
 */
const _attributesToArray = (minis, attribute) => {
  const allValues = minis
    .map((item) => item.frontmatter[attribute])
    .filter((item) => item !== null)
    .flat();

  const dedupedArray = [...new Set(allValues)];
  return dedupedArray.sort();
};

/**
 * Aggregate the 'lines' values for the provided miniatures
 *
 * Lines are aggregated differently.  If a miniature has a line of
 * "Manufacturer > Game > Faction", then "Manufacturer",
 * "Manufacturer > Game", and Manufacturer > Game > Faction" will all
 * be added to the aggregate collection.
 *
 * @param   {Array}  minis  Miniatures to aggregate
 *
 * @return  {Array}         Unique, sorted array
 */
const _collectLines = (minis) => {
  const allLines = [];

  minis.forEach(({ frontmatter }) => {
    if (!(frontmatter.line instanceof Array)) {
      return allLines.push(frontmatter.line);
    }

    const length = frontmatter.line.length;
    for (let i = 1; i <= length; i++) {
      allLines.push(frontmatter.line.slice(0, i).join(" > "));
    }
  });

  return [...new Set([...allLines])].sort();
};

/**
 * Parse all miniatures and aggregate their frontmatter tags
 *
 * @param   {Array}  collection  Array of miniatures
 *
 * @return  {Object}
 */
const useAggregatedTags = (collection) => {
  const [minis] = useState(collection);

  const weaponTags = [];
  const armorTags = [];
  const raceTags = [];
  const paintedTags = [];
  const lineTags = [];

  weaponTags.push(..._attributesToArray(minis, "weapons"));
  armorTags.push(..._attributesToArray(minis, "armor"));
  raceTags.push(..._attributesToArray(minis, "race"));
  paintedTags.push(..._attributesToArray(minis, "status"));
  lineTags.push(..._collectLines(minis));

  // TODO: Manufacturer/Lines

  return {
    weapons: weaponTags,
    armor: armorTags,
    race: raceTags,
    status: paintedTags,
    line: lineTags,
  };
};

export default useAggregatedTags;
