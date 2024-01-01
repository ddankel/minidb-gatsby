import { useZippedCollectionTagIndex } from "@/common/hooks/useTagIndex";
import { TagCount } from "@/common/models/TagIndex/types";
import { FilterOption } from "../types/FilterOption";

const useCountForOption = ({ type, value }: FilterOption) => {
  const zippedTags = useZippedCollectionTagIndex();

  let tagsForType: TagCount[] = [];
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
