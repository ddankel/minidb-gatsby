import aggregateTagSet from "./aggregateTagSet";
import collectLines from "./collectLines";

/**
 * Aggregate all tag categories across a collection
 *
 * @param   {Array}  collection  Array of miniatures
 *
 * @return  {Object}             Hashed tag aggregations
 */
const buildAggregateHash = (collection) => {
  return {
    raceTags: aggregateTagSet(collection.map((mini) => mini.raceTags)),
    archetypeTags: aggregateTagSet(collection.map((mini) => mini.archetypeTags)),
    weaponTags: aggregateTagSet(collection.map((mini) => mini.weaponTags)),
    armorTags: aggregateTagSet(collection.map((mini) => mini.armorTags)),
    paintedTags: aggregateTagSet(collection.map((mini) => mini.paintedState)),
    lines: aggregateTagSet(collectLines(collection.map((mini) => mini.lineArray))),
  };
};

export default buildAggregateHash;
