import { getImage } from "gatsby-plugin-image";
import ImageGallery from "react-image-gallery";

import GatsbyImage from "@/common/components/GatsbyImage";

import GalleryWrapper from "./GalleryWrapper";
import "./styles.css";
import { Photo } from "../../../../types/Photo";
import { parsePhotosForGallery } from "./utils";
import Center from "@/common/components/Center";

type GalleryProps = {
  photos: Photo[];
};

const Gallery = ({ photos }: GalleryProps) => {
  if (photos.length === 1) {
    const photo = getImage(photos[0]);
    if (!photo) return null;

    return (
      <Center>
        <GatsbyImage image={photo} alt="" />
      </Center>
    );
  }

  const miniImages = parsePhotosForGallery(photos);

  return (
    <GalleryWrapper>
      <ImageGallery
        items={miniImages}
        showPlayButton={false}
        showBullets={true}
        useBrowserFullscreen={false}
        showNav={true}
        thumbnailPosition="bottom"
      />
    </GalleryWrapper>
  );
};

export default Gallery;
