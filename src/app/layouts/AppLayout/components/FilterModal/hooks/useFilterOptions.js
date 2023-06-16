import { useEntireCollectionTags } from "@/common/hooks/useAggregationStore";
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
  const tags = useEntireCollectionTags();

  const speciesOptions = convertTagsToOptions("species", tags.raceTags);
  const archetypeOptions = convertTagsToOptions("archetype", tags.archetypeTags);
  const weaponOptions = convertTagsToOptions("weapon", tags.weaponTags);
  const armorOptions = convertTagsToOptions("armor", tags.armorTags);
  const paintedOptions = convertTagsToOptions("painted", tags.paintedTags);
  const lineOptions = convertTagsToOptions("line", tags.lines);

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
