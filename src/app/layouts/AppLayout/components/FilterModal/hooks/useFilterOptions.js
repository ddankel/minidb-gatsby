import { useWholeCollectionTags } from "@/modules/gallery/hooks/useAggregatedTags";
import { startCase, last } from "lodash";

const convertTagsToOptions = (type, tags) => {
  return tags.map((item) => ({
    label: startCase(last(item.name.split(" > "))),
    value: item.name,
    type,
  }));
};

/**
 * Compile the list of tags over the library into options for the filter field
 *
 * @return  {Array<Object>}
 */
const useFilterOptions = () => {
  // const zippedTags = useFilteredCollectionZippedTags();
  const zippedTags = useWholeCollectionTags();

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
