import buildAggregateHash from "./buildAggregateHash";

class TagIndex {
  #speciesTags = [];
  #archetypeTags = [];
  #weaponTags = [];
  #armorTags = [];
  #statusTags = [];
  #lines = [];

  constructor(data) {
    this.#speciesTags = data.speciesTags;
    this.#archetypeTags = data.archetypeTags;
    this.#weaponTags = data.weaponTags;
    this.#armorTags = data.armorTags;
    this.#statusTags = data.statusTags;
    this.#lines = data.lines;
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

TagAggregation.fromCollection = function (collection) {
  const dataHash = buildAggregateHash(collection);
  return new TagAggregation(dataHash);
};

TagAggregation.zipTogether = function (a, b) {
  // taghash = zip(a,b)
  // return new TagAggregation(taghash)
};
