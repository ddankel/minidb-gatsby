import {
  useArchetypeFilter,
  useArmorFilter,
  useLineFilter,
  usePaintedFilter,
  useSpeciesFilter,
  useWeaponFilter,
} from "@/common/hooks/useFilterStore";

const pickSelectedOptions = (options, filter) => {
  return options.filter((item) => filter.includes(item.value));
};

const useSelectionFromFilters = (options) => {
  const speciesFilter = useSpeciesFilter();
  const archetypeFilter = useArchetypeFilter();
  const weaponFilter = useWeaponFilter();
  const armorFilter = useArmorFilter();
  const lineFilter = useLineFilter();
  const paintedFilter = usePaintedFilter();

  // console.log("OPTIONS", options);

  const speciesOptions = options.filter((item) => speciesFilter.includes(item.value));
  const archetypeOptions = options.filter((item) => archetypeFilter.includes(item.value));
  const weaponOptions = options.filter((item) => weaponFilter.includes(item.value));
  const armorOptions = pickSelectedOptions(options, armorFilter);
  const lineOptions = pickSelectedOptions(options, lineFilter);
  const paintedOptions = pickSelectedOptions(options, paintedFilter);

  // const selectionFromFilters = options.filter((item) => speciesFilter.includes(item.value));
  const selectionFromFilters = [
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