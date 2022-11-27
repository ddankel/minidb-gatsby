import React from "react";
import { Link, navigate } from "gatsby";

import { Miniature, ImageContainer, Caption, Image } from "./styled";
import usePhotos from "../../../../hooks/usePhotos";

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
