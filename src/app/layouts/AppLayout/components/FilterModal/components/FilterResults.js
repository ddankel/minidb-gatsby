import { useFilteredCollectionZippedTags } from "@/modules/gallery/hooks/useAggregatedTags";
import { startCase } from "lodash";

const FilterResults = ({ option }) => {
  const formattedValue = option.value
    .split(" > ")
    .map((segment) => startCase(segment))
    .join(" > ");

  const zippedTags = useFilteredCollectionZippedTags();

  // console.log("!!!!", zippedTags);

  const getCountForTag = (type, value) => {
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
    }

    const matchingTag = tagsForType.find((item) => item.name === value);

    return !!matchingTag ? matchingTag.count : "";
  };

  return (
    <span>
      {startCase(option.type)}: {formattedValue} ({getCountForTag(option.type, option.value)})
    </span>
  );
};
export default FilterResults;
