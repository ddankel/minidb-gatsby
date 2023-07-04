import buildAggregateHash from "./buildAggregateHash";
import { zipAllTags } from "./zipTags";

class TagIndex {
  #genreTags = [];
  #speciesTags = [];
  #archetypeTags = [];
  #weaponTags = [];
  #armorTags = [];
  #statusTags = [];
  #lines = [];

  constructor(data) {
    this.#genreTags = data.genreTags;
    this.#speciesTags = data.speciesTags;
    this.#archetypeTags = data.archetypeTags;
    this.#weaponTags = data.weaponTags;
    this.#armorTags = data.armorTags;
    this.#statusTags = data.statusTags;
    this.#lines = data.lines;
  }

  get genreTags() {
    return this.#genreTags;
  }

  get speciesTags() {
    return this.#speciesTags;
  }
  get archetypeTags() {
    return this.#archetypeTags;
  }
  get weaponTags() {
    return this.#weaponTags;
  }
  get armorTags() {
    return this.#armorTags;
  }
  get statusTags() {
    return this.#statusTags;
  }
  get lines() {
    return this.#lines;
  }

  toHash() {
    return {
      genreTags: this.#genreTags,
      speciesTags: this.#speciesTags,
      archetypeTags: this.#archetypeTags,
      weaponTags: this.#weaponTags,
      armorTags: this.#armorTags,
      statusTags: this.#statusTags,
      lines: this.#lines,
    };
  }
}

export default TagIndex;

TagIndex.tagKeys = [
  "speciesTags",
  "archetypeTags",
  "weaponTags",
  "armorTags",
  "statusTags",
  "lines",
];

TagIndex.fromCollection = function (collection) {
  const dataHash = buildAggregateHash(collection);
  return new TagIndex(dataHash);
};

TagIndex.zipTogether = function (allTags, filteredTags) {
  const dataHash = zipAllTags(allTags, filteredTags);
  return new TagIndex(dataHash);
};
