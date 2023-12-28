import { countBy } from "lodash";
import { Collection } from "../Collection";
import { CategorizedTagCounts, TagCount } from "./types";

/**
 * Aggregate all tag categories across a collection
 */
const buildAggregateHash = (collection: Collection): CategorizedTagCounts => {
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

const aggregateTagSet = (tagsArray: string[][] | string[]): TagCount[] => {
  const counts = countBy(tagsArray.flat());
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
const collectLines = (miniLines: string[][]) => {
  const allLines: string[] = [];

  miniLines.forEach((lineArray) => {
    const length = lineArray.length;
    for (let i = 1; i <= length; i++) {
      allLines.push(lineArray.slice(0, i).join(" > "));
    }
  });

  return allLines;
};
