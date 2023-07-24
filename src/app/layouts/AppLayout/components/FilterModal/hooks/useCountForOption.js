import { useZippedCollectionTagIndex } from "@/common/hooks/useTagIndex";

const useCountForOption = ({ type, value }) => {
  const zippedTags = useZippedCollectionTagIndex();

  let tagsForType = [];
  switch (type) {
    case "genre":
      tagsForType = zippedTags.genreTags;
      break;
    case "archetype":
      tagsForType = zippedTags.archetypeTags;
      break;
    case "armor":
      tagsForType = zippedTags.armorTags;
      break;
    case "line":
      tagsForType = zippedTags.lines;
      break;
    case "painted":
      tagsForType = zippedTags.statusTags;
      break;
    case "race":
    case "species":
      tagsForType = zippedTags.speciesTags;
      break;
    case "weapon":
      tagsForType = zippedTags.weaponTags;
      break;
    default:
  }

  const matchingTag = tagsForType.find((item) => item.name === value);

  return !!matchingTag ? matchingTag.count : 0;
};
export default useCountForOption;
