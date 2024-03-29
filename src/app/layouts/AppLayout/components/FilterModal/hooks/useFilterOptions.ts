import { useEntireCollectionTagIndex } from "@/common/hooks/useTagIndex";
import { TagCount } from "@/common/models/TagIndex/types";
import { startCase, last } from "lodash";
import { FilterOption } from "../types/FilterOption";

const convertTagsToOptions = (type: string, tags: TagCount[]) => {
  return tags.map((item) => ({
    label: startCase(last(item.name.split(" > "))),
    value: item.name,
    type,
  }));
};

/**
 * Compile the list of tags over the library into options for the filter field
 */
const useFilterOptions = (): FilterOption[] => {
  const tagIndex = useEntireCollectionTagIndex();

  const genreOptions = convertTagsToOptions("genre", tagIndex.genreTags);
  const speciesOptions = convertTagsToOptions("species", tagIndex.speciesTags);
  const archetypeOptions = convertTagsToOptions("archetype", tagIndex.archetypeTags);
  const weaponOptions = convertTagsToOptions("weapon", tagIndex.weaponTags);
  const armorOptions = convertTagsToOptions("armor", tagIndex.armorTags);
  const paintedOptions = convertTagsToOptions("painted", tagIndex.statusTags);
  const lineOptions = convertTagsToOptions("line", tagIndex.lines);

  const options = [
    ...genreOptions,
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
