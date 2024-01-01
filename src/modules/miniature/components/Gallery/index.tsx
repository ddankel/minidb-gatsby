import { getImage } from "gatsby-plugin-image";
import ImageGallery from "react-image-gallery";

import Center from "@/common/components/Center";
import GatsbyImage from "@/common/components/GatsbyImage";
import { MiniaturePhoto } from "@/types/MiniatureFrontmatter.types";

import GalleryWrapper from "./GalleryWrapper";
import "./styles.css";
import { parsePhotosForGallery } from "./utils";

type GalleryProps = {
  photos: MiniaturePhoto[];
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
