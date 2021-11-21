import React from "react";
import { navigate } from "gatsby-link";
import { Contents, Control, Label, LeftArrow, RightArrow, NavImage } from "./styled";
import usePhotos from "../../../../hooks/usePhotos";
import useFrontmatter from "../../../../hooks/useFrontmatter";

const NavButton = ({ slug, variant, ...restProps }) => {
  const [imgSrc] = usePhotos(slug);
  const { name } = useFrontmatter(slug);

  if (!["prev", "next"].includes(variant)) {
    throw `Variant must be 'prev' or 'next'.  Recieved: '${variant}' instead.`;
  }

  const Arrow = variant === "prev" ? LeftArrow : RightArrow;

  return (
    <Control onClick={() => navigate(`/minis/${slug}`)} {...restProps}>
      <Contents variant={variant}>
        <Arrow />
        <NavImage image={imgSrc} alt={name} />
        <Label>{name}</Label>
      </Contents>
    </Control>
  );
};

export default NavButton;
