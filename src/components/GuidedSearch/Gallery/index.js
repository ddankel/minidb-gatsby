import React from "react";
import { Link, navigate } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { GalleryWrapper, Miniature, ImageContainer, Caption } from "./styled";

const Gallery = ({ minis }) => {
  return (
    <GalleryWrapper>
      {minis.map((mini, index) => {
        const { slug, name, photos } = mini.frontmatter;
        const image = getImage(photos[0]);

        return (
          <Miniature key={index} onClick={() => navigate(`/minis/${slug}`)}>
            <Link to={`/minis/${slug}`}>
              <ImageContainer>
                {/* <img
                    alt=""
                    src={photos[0].publicURL}
                    style={{ height: "100px", width: "100px" }}
                  /> */}
                <GatsbyImage image={image} alt={name} />
              </ImageContainer>
            </Link>
            <Caption>
              <p>{name}</p>
            </Caption>
          </Miniature>
        );
      })}
    </GalleryWrapper>
  );
};

export default Gallery;
