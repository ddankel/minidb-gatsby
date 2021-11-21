import React from "react";

import { GalleryWrapper } from "./styled";
import GalleryItem from "../GalleryItem";

const Gallery = ({ minis }) => {
  return (
    <GalleryWrapper>
      {minis && minis.map((mini, index) => <GalleryItem mini={mini} key={index} />)}
    </GalleryWrapper>
  );
};

export default Gallery;
