import {
  useArchetypeFilter,
  useArmorFilter,
  useGenreFilter,
  useLineFilter,
  usePaintedFilter,
  useSpeciesFilter,
  useWeaponFilter,
} from "@/common/hooks/useFilterStore";

const pickSelectedOptions = (options, filter) => {
  return options.filter((item) => filter.includes(item.value));
};

const useSelectionFromFilters = (options) => {
  const genreFilter = useGenreFilter();
  const speciesFilter = useSpeciesFilter();
  const archetypeFilter = useArchetypeFilter();
  const weaponFilter = useWeaponFilter();
  const armorFilter = useArmorFilter();
  const lineFilter = useLineFilter();
  const paintedFilter = usePaintedFilter();

  const genreOptions = options.filter((item) => genreFilter.includes(item.value));
  const speciesOptions = options.filter((item) => speciesFilter.includes(item.value));
  const archetypeOptions = options.filter((item) => archetypeFilter.includes(item.value));
  const weaponOptions = options.filter((item) => weaponFilter.includes(item.value));
  const armorOptions = pickSelectedOptions(options, armorFilter);
  const lineOptions = pickSelectedOptions(options, lineFilter);
  const paintedOptions = pickSelectedOptions(options, paintedFilter);

  const selectionFromFilters = [
    ...genreOptions,
    ...speciesOptions,
    ...archetypeOptions,
    ...weaponOptions,
    ...armorOptions,
    ...lineOptions,
    ...paintedOptions,
  ];

  return selectionFromFilters;
};

export default useSelectionFromFilters;
