import React from "react";
import usePhotos from "@/hooks/usePhotos";
import useFrontmatter from "@/hooks/useFrontmatter";
import { NavLink, Contents, Label, LeftArrow, RightArrow, NavImage } from "./styled";

const NavButton = ({ slug, variant, ...restProps }) => {
  const [imgSrc] = usePhotos(slug);
  const { name } = useFrontmatter(slug);

  if (!["prev", "next"].includes(variant)) {
    throw new Error(`Variant must be 'prev' or 'next'.  Recieved: '${variant}' instead.`);
  }

  const Arrow = variant === "prev" ? LeftArrow : RightArrow;

  return (
    <NavLink to={`/minis/${slug}`} {...restProps}>
      <Contents variant={variant}>
        <Arrow />
        <NavImage image={imgSrc} alt={name} />
        <Label>{name}</Label>
      </Contents>
    </NavLink>
  );
};

export default NavButton;
