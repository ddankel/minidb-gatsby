import React from "react";
import { getImage } from "gatsby-plugin-image";
import ImageGallery from "react-image-gallery";

import GatsbyImage from "@/common/components/GatsbyImage";

import styled from "styled-components";
import "./styles.css";

const GalleryWrapper = styled.div`
  max-width: 450px;
  margin-left: auto;
  margin-right: auto;
  align-contents: center;
`;

const Gallery = ({ photos }) => {
  const miniImages = [];

  if (photos.length === 1) {
    const photo = getImage(photos[0]);
    return (
      <center>
        <GatsbyImage image={photo} alt="" />
      </center>
    );
  }

  photos.forEach((src) => {
    miniImages.push({
      original: src.publicURL,
      thumbnail: getImage(src).images.fallback.src,
    });
  });

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
