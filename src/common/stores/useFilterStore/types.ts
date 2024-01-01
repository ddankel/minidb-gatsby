export type FilterLabel =
  | "genreFilter"
  | "speciesFilter"
  | "archetypeFilter"
  | "weaponFilter"
  | "armorFilter"
  | "paintedFilter"
  | "nameFilter"
  | "lineFilter";

export type FilterToken = [
  string[],
  string[],
  string[],
  string[],
  string[],
  string[],
  string[],
  string[],
  boolean
];

export type FilterStateValues = {
  genreFilter: string[];
  speciesFilter: string[];
  archetypeFilter: string[];
  weaponFilter: string[];
  armorFilter: string[];
  paintedFilter: string[];
  nameFilter: string[];
  lineFilter: string[];
};

export type FilterState = FilterStateValues & {
  ignoreMonsters: boolean;
  isFiltered: boolean;

  actions: {
    addGenreFilter: (value: string) => void;
    removeGenreFilter: (value: string) => void;
    addSpeciesFilter: (value: string) => void;
    removeSpeciesFilter: (value: string) => void;

    addArchetypeFilter: (value: string) => void;
    removeArchetypeFilter: (value: string) => void;

    addWeaponFilter: (value: string) => void;
    removeWeaponFilter: (value: string) => void;

    addArmorFilter: (value: string) => void;
    removeArmorFilter: (value: string) => void;

    setPaintedFilter: (value: string[]) => void;
    addPaintedFilter: (value: string) => void;
    removePaintedFilter: (value: string) => void;

    addNameFilter: (value: string) => void;
    removeNameFilter: (value: string) => void;

    setLineFilter: (value: string) => void;
    addLineFilter: (value: string) => void;
    removeLineFilter: (value: string) => void;

    setIgnoreMonsters: (value: boolean) => void;

    setFilter: (label: FilterLabel, value: string | string[]) => void;

    resetFilters: () => void;
  };

  triggers: {
    updateIsFiltered: () => void;
  };
};
