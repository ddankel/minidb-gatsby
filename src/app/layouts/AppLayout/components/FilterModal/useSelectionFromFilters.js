import { useSpeciesFilter } from "@/common/hooks/useFilterStore";

const useSelectionFromFilters = (options) => {
  const speciesFilter = useSpeciesFilter();

  console.log("OPTIONS", options);

  const selectionFromFilters = options.filter((item) => speciesFilter.includes(item.value));

  console.log("usff", options, speciesFilter, selectionFromFilters);

  return selectionFromFilters;
};

export default useSelectionFromFilters;
