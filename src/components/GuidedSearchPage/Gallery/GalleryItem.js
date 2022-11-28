import React from "react";
import { Link, navigate } from "gatsby";

import Miniature from "./Miniature";
import ImageContainer from "./ImageContainer";
import Image from "./Image";
import Caption from "./Caption";

import usePhotos from "../../../hooks/usePhotos";

const GalleryItem = ({ mini }) => {
  const { slug, name } = mini.frontmatter;
  const [imgSrc] = usePhotos(slug);

  return (
    <Miniature onClick={() => navigate(`/minis/${slug}`)}>
      <Link to={`/minis/${slug}`}>
        <ImageContainer>
          <Image image={imgSrc} alt={name} />
        </ImageContainer>
      </Link>
      <Caption>
        <p>{name}</p>
      </Caption>
    </Miniature>
  );
};

export default GalleryItem;
