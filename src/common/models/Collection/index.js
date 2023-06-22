import buildAggregateHash from "./buildAggregateHash";

class Collection {
  #miniatures = [];

  constructor(miniatures) {
    this.#miniatures = miniatures;
  }

  /**
   * If the collection contains no miniatures
   *
   * @return  {Boolean}
   */
  get length() {
    return this.#miniatures.length;
  }

  /**
   * Aggregate and count tags on miniatures in this collection
   *
   * @return  {Object}  Tag aggregation
   */
  aggregateTags() {
    return this.length ? buildAggregateHash(this.#miniatures) : {};
  }

  /**
   * Apply a GalleryFilter object to this collection and return a new collection
   *
   * @param   {GalleryFilter}  galleryFilter
   *
   * @return  {Collection}
   */
  applyFilter(galleryFilter) {
    if (!galleryFilter) return;

    return this.#miniatures.filter((item) => galleryFilter.includes(item));
  }

  /**
   * Find the miniature immediately before and after the provided miniature slug
   *
   * @param   {string}  slug
   *
   * @return  {Object<{prevMini, nextMini}>}
   */
  findAdjacentMinis(slug) {
    const thisIndex = this.#miniatures.findIndex((mini) => mini.slug === slug);
    const prevIndex = (thisIndex + this.length - 1) % this.length;
    const nextIndex = (thisIndex + 1) % this.length;

    const prevMini = this.#miniatures[prevIndex];
    const nextMini = this.#miniatures[nextIndex];

    return { prevMini, nextMini };
  }

  /**
   * Find the miniature in the collection with the provided slug
   *
   * @param   {string}    slug
   *
   * @return  {Miniature, undefined}
   */
  findMini(slug) {
    return this.#miniatures.find((mini) => mini.slug === slug);
  }

  /**
   * Return an array of Miniatures in this collection
   *
   * @return  {Array<Miniature>}
   */
  toArray() {
    return this.#miniatures;
  }
}

export default Collection;
