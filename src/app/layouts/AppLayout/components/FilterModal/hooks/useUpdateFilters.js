import { useFilterActions } from "@/common/hooks/useFilterStore";
import { last } from "lodash";

const useUpdateFilters = () => {
  const { setFilter } = useFilterActions();

  const updateFilters = (selectedOptions) => {
    const convertFiltersToValues = (type) => {
      return selectedOptions.filter((item) => item.type === type).map((item) => item.value);
    };

    const speciesValues = convertFiltersToValues("species");
    setFilter("speciesFilter", speciesValues);

    const archetypeValues = convertFiltersToValues("archetype");
    setFilter("archetypeFilter", archetypeValues);

    const weaponValues = convertFiltersToValues("weapon");
    setFilter("weaponFilter", weaponValues);

    const armorValues = convertFiltersToValues("armor");
    setFilter("armorFilter", armorValues);

    const paintedOptions = convertFiltersToValues("painted");
    setFilter("paintedFilter", !!paintedOptions.length ? [last(paintedOptions)] : []);

    const lineOptions = convertFiltersToValues("line");
    setFilter("lineFilter", !!lineOptions.length ? [last(lineOptions)] : []);
  };

  return updateFilters;
};

export default useUpdateFilters;