import React from "react";
import { Link, navigate } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

import { Miniature, ImageContainer, Caption } from "./styled";
import usePhotos from "../../../../hooks/usePhotos";

const GalleryItem = ({ mini }) => {
  const { slug, name } = mini.frontmatter;
  const [imgSrc] = usePhotos(slug);

  return (
    <Miniature onClick={() => navigate(`/minis/${slug}`)}>
      <Link to={`/minis/${slug}`}>
        <ImageContainer>
          <GatsbyImage image={imgSrc} alt={name} />
        </ImageContainer>
      </Link>
      <Caption>
        <p>{name}</p>
      </Caption>
    </Miniature>
  );
};

export default GalleryItem;
