import { useEntireCollectionTagIndex } from "@/common/hooks/useTagIndex";
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
  const tagIndex = useEntireCollectionTagIndex();

  const speciesOptions = convertTagsToOptions("species", tagIndex.speciesTags);
  const archetypeOptions = convertTagsToOptions("archetype", tagIndex.archetypeTags);
  const weaponOptions = convertTagsToOptions("weapon", tagIndex.weaponTags);
  const armorOptions = convertTagsToOptions("armor", tagIndex.armorTags);
  const paintedOptions = convertTagsToOptions("painted", tagIndex.statusTags);
  const lineOptions = convertTagsToOptions("line", tagIndex.lines);

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
