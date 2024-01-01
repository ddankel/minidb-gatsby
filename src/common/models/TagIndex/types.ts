export type TagCount = {
  name: string;
  count: number;
};

export type CategorizedTagCounts = {
  [key: string]: TagCount[];
};

/**
 * Data object to use to initialize a TagIndex instance
 */
export type TagIndexData = {
  genreTags?: TagCount[];
  speciesTags?: TagCount[];
  archetypeTags?: TagCount[];
  weaponTags?: TagCount[];
  armorTags?: TagCount[];
  statusTags?: TagCount[];
  lines?: TagCount[];
};
