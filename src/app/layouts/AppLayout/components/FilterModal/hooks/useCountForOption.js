import { useFilteredCollectionZippedTags } from "@/modules/gallery/hooks/useAggregatedTags";

const useCountForOption = ({ type, value }) => {
  const zippedTags = useFilteredCollectionZippedTags();

  let tagsForType = [];
  switch (type) {
    case "archetype":
      tagsForType = zippedTags.archetypeTags;
      break;
    case "armor":
      tagsForType = zippedTags.armorTags;
      break;
    case "lines":
      tagsForType = zippedTags.lines;
      break;
    case "painted":
      tagsForType = zippedTags.paintedTags;
      break;
    case "race":
    case "species":
      tagsForType = zippedTags.raceTags;
      break;
    case "weapon":
      tagsForType = zippedTags.weaponTags;
      break;
    default:
  }

  const matchingTag = tagsForType.find((item) => item.name === value);

  return !!matchingTag ? matchingTag.count : "";
};
export default useCountForOption;
