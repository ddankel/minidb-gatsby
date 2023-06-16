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

export default collectLines;
