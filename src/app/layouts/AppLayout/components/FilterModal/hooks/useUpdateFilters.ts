import { useFilterActions } from "@/common/stores/useFilterStore";
import { last } from "lodash";
import { FilterOption } from "../types/FilterOption";

const useUpdateFilters = () => {
  const { setFilter } = useFilterActions();

  const updateFilters = (selectedOptions: FilterOption[]) => {
    const convertFiltersToValues = (type: string) => {
      return selectedOptions.filter((item) => item.type === type).map((item) => item.value);
    };

    const genreValues = convertFiltersToValues("genre");
    setFilter("genreFilter", genreValues);

    const speciesValues = convertFiltersToValues("species");
    setFilter("speciesFilter", speciesValues);

    const archetypeValues = convertFiltersToValues("archetype");
    setFilter("archetypeFilter", archetypeValues);

    const weaponValues = convertFiltersToValues("weapon");
    setFilter("weaponFilter", weaponValues);

    const armorValues = convertFiltersToValues("armor");
    setFilter("armorFilter", armorValues);

    const paintedOptions = convertFiltersToValues("painted");
    const lpo = last(paintedOptions);
    if (paintedOptions.length && lpo) {
      setFilter("paintedFilter", [lpo]);
    } else {
      setFilter("paintedFilter", []);
    }

    const lineOptions = convertFiltersToValues("line");
    const llo = last(lineOptions);
    if (lineOptions.length && llo) {
      setFilter("lineFilter", [llo]);
    } else {
      setFilter("lineFilter", []);
    }
  };

  return updateFilters;
};

export default useUpdateFilters;
