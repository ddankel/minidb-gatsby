import React from "react";
import { getImage } from "gatsby-plugin-image";
import ImageGallery from "react-image-gallery";

import styled from "styled-components";
import "./styles.css";

const miniImages = [];

const GalleryWrapper = styled.div`
  max-width: 450px;
  margin-left: auto;
  margin-right: auto;
  align-contents: center;
`;

const Gallery = ({ photos }) => {
  if (photos.length === 1) {
    return (
      <center>
        <img alt="" src={photos[0].publicURL} />
      </center>
    );
  }

  photos.forEach((src, index) => {
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
      />
    </GalleryWrapper>
  );
};

export default Gallery;
