import _ from "lodash";
import { Collection } from "../Collection";

/**
 * Aggregate all tag categories across a collection
 *
 * @param   {Array}  collection  Array of miniatures
 *
 * @return  {Object}             Hashed tag aggregations
 */
const buildAggregateHash = (collection: Collection) => {
  if (!collection.length) return {};

  return {
    genreTags: aggregateTagSet(collection.map((mini) => mini.genreTags)),
    speciesTags: aggregateTagSet(collection.map((mini) => mini.raceTags)),
    archetypeTags: aggregateTagSet(collection.map((mini) => mini.archetypeTags)),
    weaponTags: aggregateTagSet(collection.map((mini) => mini.weaponTags)),
    armorTags: aggregateTagSet(collection.map((mini) => mini.armorTags)),
    statusTags: aggregateTagSet(collection.map((mini) => mini.paintedState)),
    lines: aggregateTagSet(collectLines(collection.map((mini) => mini.lineArray))),
  };
};

export default buildAggregateHash;

/**
 * Aggregate and count an array of tags
 *
 * @example
 *  const tagsArray = [sword, bow, sword, axe]
 *  console.log(aggregateTagSet(tagsArray))
 *
 *  [
 *    { name: "axe",
 *      count: "1"},
 *    { name: "bow",
 *      count: "1"},
 *    { name: "sword",
 *      count: "2"},
 *  ]
 *
 * @param   {Array<String>}  tagsArray  Array of tags to aggregate
 *
 * @return  {Array<Object>}             Unique counts of each tag
 */
const aggregateTagSet = (tagsArray) => {
  const counts = _.countBy(tagsArray.flat());
  const uniqueNames = Object.keys(counts).sort();
  return uniqueNames.map((name) => ({ name, count: counts[name] }));
};

/**
 * Aggregate the 'lines' values for the provided miniatures
 *
 * Lines are aggregated differently.  If a miniature has a line of
 * "Manufacturer > Game > Faction", then "Manufacturer",
 * "Manufacturer > Game", and Manufacturer > Game > Faction" will all
 * be added to the aggregate collection.
 */
const collectLines = (miniLines) => {
  const allLines = [];

  miniLines.forEach((lineArray) => {
    const length = lineArray.length;
    for (let i = 1; i <= length; i++) {
      allLines.push(lineArray.slice(0, i).join(" > "));
    }
  });

  return allLines;
};
