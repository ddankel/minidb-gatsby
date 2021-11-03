import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import ImageGallery from "react-image-gallery";
import "./styles.css";

const miniImages = [];

const Gallery = ({ photos }) => {
  const [selectedImage, setSelectedImage] = React.useState(0);

  if (photos.length === 1) {
    return (
      <center>
        <img alt="" src={photos[selectedImage].publicURL} />
      </center>
    );
  }

  photos.forEach((src, index) => {
    miniImages.push({
      original: src.publicURL,
      thumbnail: getImage(src).images.fallback.src,
    });
  });
  console.log("miniImages", miniImages);

  return (
    <>
      <ImageGallery
        items={miniImages}
        showPlayButton={false}
        showBullets={true}
        useBrowserFullscreen={false}
        showNav={true}
      />
    </>
  );
};

export default Gallery;
