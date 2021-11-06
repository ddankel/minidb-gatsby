export const aggregateTags = (minis) => {
  const tags = {};

  minis.forEach((mini) => {
    console.log("-0----------------");
    ["weapons", "armor", "race", "is_painted"].forEach((attribute) => {
      const currentAttributeList = tags[attribute] || [];
      const thisMiniAttributeList = [mini.frontmatter[attribute]].flat();

      if (attribute === "is_painted") {
        console.log(attribute);
        console.log("current", currentAttributeList);
        console.log("fm", mini.frontmatter[attribute]);
        console.log("new", thisMiniAttributeList);
      }

      const uniqueAttributeList = [...new Set([...currentAttributeList, ...thisMiniAttributeList])];
      tags[attribute] = uniqueAttributeList.sort();
    });
  });

  console.log(tags);

  return tags;
};
