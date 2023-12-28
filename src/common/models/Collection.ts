import GalleryFilter from "./GalleryFilter";
import { Miniature } from "./Miniature";
import { TagIndex } from "./TagIndex";

export class Collection {
  constructor(readonly miniatures: Miniature[]) {}

  get length() {
    return this.miniatures.length;
  }

  indexTags() {
    return TagIndex.fromCollection(this);
  }

  applyFilter(galleryFilter: GalleryFilter) {
    if (!galleryFilter) return;

    return this.miniatures.filter((item) => galleryFilter.includes(item));
  }

  findAdjacentMinis(slug: string) {
    const thisIndex = this.miniatures.findIndex((mini) => mini.slug === slug);
    const prevIndex = (thisIndex + this.length - 1) % this.length;
    const nextIndex = (thisIndex + 1) % this.length;

    const prevMini = this.miniatures[prevIndex];
    const nextMini = this.miniatures[nextIndex];

    return { prevMini, nextMini };
  }

  findMini(slug: string) {
    return this.miniatures.find((mini) => mini.slug === slug);
  }

  map<T>(mapFunction: (arg: Miniature) => T) {
    return this.miniatures.map(mapFunction);
  }

  toArray() {
    return this.miniatures;
  }
}
