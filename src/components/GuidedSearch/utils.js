export const aggregateTags = (minis) => {
  const tags = {};

  minis.forEach((mini) => {
    ["weapons", "armor", "race", "is_painted"].forEach((attribute) => {
      const currentAttributeList = tags[attribute] || [];
      const thisMiniAttributeList = [mini.frontmatter[attribute]].flat();
      const uniqueAttributeList = [...new Set([...currentAttributeList, ...thisMiniAttributeList])];
      tags[attribute] = uniqueAttributeList.sort();
    });
  });

  return tags;
};
