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
  get isEmpty() {
    return !this.#miniatures.length;
  }

  /**
   * Aggregate and count tags on miniatures in this collection
   *
   * @return  {Object}  Tag aggregation
   */
  aggregateTags() {
    return this.isEmpty ? {} : buildAggregateHash(this.#miniatures);
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
   * Return an array of Miniatures in this collection
   *
   * @return  {Array<Miniature>}
   */
  toArray() {
    return this.#miniatures;
  }
}

export default Collection;
