import { Collection } from "../Collection";
import buildAggregateHash from "./buildAggregateHash";
import { CategorizedTagCounts, TagCount, TagIndexData } from "./types";
import { zipAllTags } from "./zipTags";

export class TagIndex {
  #genreTags: TagCount[];
  #speciesTags: TagCount[];
  #archetypeTags: TagCount[];
  #weaponTags: TagCount[];
  #armorTags: TagCount[];
  #statusTags: TagCount[];
  #lines: TagCount[];

  static tagKeys = [
    "genreTags",
    "speciesTags",
    "archetypeTags",
    "weaponTags",
    "armorTags",
    "statusTags",
    "lines",
  ];

  constructor(data: TagIndexData) {
    this.#genreTags = data.genreTags || [];
    this.#speciesTags = data.speciesTags || [];
    this.#archetypeTags = data.archetypeTags || [];
    this.#weaponTags = data.weaponTags || [];
    this.#armorTags = data.armorTags || [];
    this.#statusTags = data.statusTags || [];
    this.#lines = data.lines || [];
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

  static fromCollection(collection: Collection) {
    const dataHash = buildAggregateHash(collection);
    return new TagIndex(dataHash);
  }

  static zipTogether(allTags: TagIndex, filteredTags: TagIndex) {
    const dataHash = zipAllTags(allTags, filteredTags);
    return new TagIndex(dataHash);
  }
}
