import _ from "lodash";

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

export default aggregateTagSet;
