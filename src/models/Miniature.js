const isDevelopment = process.env.NODE_ENV === "development";

const DEFAULT_ARCHETYPE_TAGS = [];
const DEFAULT_RACE_TAGS = [];
const DEFAULT_WEAPON_TAGS = [];
const DEFAULT_ARMOR_TAGS = [];
const DEFAULT_POST_STATUS = "published";
const DEFAULT_PAINTED_STATUS = "painted";
const DEFAULT_QUANTITY = 1;

class Miniature {
  #frontmatter = {};
  #html = "";

  constructor({ frontmatter, html }) {
    this.#frontmatter = frontmatter;
    this.#html = html;
  }

  get frontmatter() {
    return this.#frontmatter;
  }

  get html() {
    return this.#html;
  }

  get slug() {
    return this.#frontmatter.slug;
  }

  get name() {
    return this.#frontmatter.name;
  }

  get sku() {
    return this.#frontmatter.sku;
  }

  get displayName() {
    return this.sku || this.name;
  }

  get lineArray() {
    return this.#frontmatter.line;
  }

  get fullLine() {
    return this.lineArray.join(" > ");
  }

  get paintedAt() {
    return this.#frontmatter.painted;
  }

  get paintedState() {
    return this.#frontmatter.status || DEFAULT_PAINTED_STATUS;
  }

  get photos() {
    return this.#frontmatter.photos;
  }

  get raceTags() {
    return this.#frontmatter.race || DEFAULT_RACE_TAGS;
  }

  get archetypeTags() {
    return this.#frontmatter.archetype || DEFAULT_ARCHETYPE_TAGS;
  }

  get weaponTags() {
    return this.#frontmatter.weapons || DEFAULT_WEAPON_TAGS;
  }

  get armorTags() {
    return this.#frontmatter.armor || DEFAULT_ARMOR_TAGS;
  }

  get quantity() {
    return this.#frontmatter.quantity || DEFAULT_QUANTITY;
  }

  get recipes() {
    return this.#frontmatter.recipes;
  }

  get postStatus() {
    return this.#frontmatter.minidb?.status || DEFAULT_POST_STATUS;
  }

  get isDraft() {
    return ["todo", "draft"].includes(this.postStatus);
  }

  get isPublished() {
    return this.postStatus === "published";
  }

  get isVisible() {
    return this.isPublished || (isDevelopment && this.isDraft);
  }
}

module.exports = Miniature;
