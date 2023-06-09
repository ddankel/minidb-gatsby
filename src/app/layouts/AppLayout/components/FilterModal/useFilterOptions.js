import { useFilteredCollectionZippedTags } from "@/modules/gallery/hooks/useAggregatedTags";
import { startCase } from "lodash";

const convertTagsToOptions = (type, tags) => {
  return tags.map((item) => ({
    label: `${startCase(type)}: ${startCase(item.name)}`,
    value: item.name,
    count: item.count,
    type,
  }));
};

const useFilterOptions = () => {
  const zippedTags = useFilteredCollectionZippedTags();

  const speciesOptions = convertTagsToOptions("species", zippedTags.raceTags);
  const archetypeOptions = convertTagsToOptions("archetype", zippedTags.archetypeTags);
  const weaponOptions = convertTagsToOptions("weapon", zippedTags.weaponTags);
  const armorOptions = convertTagsToOptions("armor", zippedTags.armorTags);
  const paintedOptions = convertTagsToOptions("painted", zippedTags.paintedTags);
  const lineOptions = convertTagsToOptions("line", zippedTags.lines);

  const options = [
    ...speciesOptions,
    ...archetypeOptions,
    ...weaponOptions,
    ...armorOptions,
    ...paintedOptions,
    ...lineOptions,
  ];

  return options;
};

export default useFilterOptions;
