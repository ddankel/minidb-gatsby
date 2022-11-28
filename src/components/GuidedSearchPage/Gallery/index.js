import React from "react";

import GalleryItem from "./GalleryItem";
import Wrapper from "./Wrapper";

const Gallery = ({ minis }) => {
  return (
    <Wrapper>
      {minis && minis.map((mini, index) => <GalleryItem mini={mini} key={index} />)}
    </Wrapper>
  );
};

export default Gallery;
