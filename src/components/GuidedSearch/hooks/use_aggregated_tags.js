import { useState } from "react";

const _attributesToArray = (minis, attribute) => {
  const allValues = minis
    .map((item) => item.frontmatter[attribute])
    .filter((item) => item !== null)
    .flat();

  const dedupedArray = [...new Set(allValues)];
  return dedupedArray.sort();
};

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
  paintedTags.push(..._attributesToArray(minis, "is_painted"));
  lineTags.push(..._collectLines(minis));

  // TODO: Manufacturer/Lines

  return {
    weapons: weaponTags,
    armor: armorTags,
    race: raceTags,
    is_painted: paintedTags,
    line: lineTags,
  };
};

export default useAggregatedTags;
