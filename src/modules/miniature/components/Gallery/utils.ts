import { getImage } from "gatsby-plugin-image";
import "./styles.css";
import { Photo } from "../../../../types/Photo";

type GalleryItem = {
  original: string;
  thumbnail: string | undefined;
};

export const parsePhotosForGallery = (photos: Photo[]) => {
  const miniImages: GalleryItem[] = [];

  photos.forEach((src) => {
    miniImages.push({
      original: src.publicURL,
      thumbnail: getImage(src)?.images?.fallback?.src,
    });
  });

  return miniImages;
};
