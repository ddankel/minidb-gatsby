import { GalleryFilter, GalleryFilterData } from "@/common/models/GalleryFilter";
import { Miniature } from "@/common/models/Miniature";

export type CollectionState = {
  entireCollectionData: Miniature[];
  filteredCollectionData: Miniature[];
  galleryFilter?: GalleryFilter;

  actions: {
    setEntireCollection: (value: Miniature[]) => void;
    setFilteredCollection: (value: Miniature[]) => void;
  };

  triggers: {
    filterCollection: () => void;
    updateGalleryFilter: (filters: GalleryFilterData) => void;
  };
};
