import useMiniature from "@/common/hooks/useMiniature";
import usePhotos from "@/common/hooks/usePhotos";

import { Contents, Label, LeftArrow, NavImage, NavLink, RightArrow } from "./styled";

const NavButton = ({ slug, variant, ...restProps }) => {
  const [imgSrc] = usePhotos(slug);
  const miniature = useMiniature(slug);

  if (!["prev", "next"].includes(variant)) {
    throw new Error(`Variant must be 'prev' or 'next'.  Recieved: '${variant}' instead.`);
  }

  const Arrow = variant === "prev" ? LeftArrow : RightArrow;

  return (
    <NavLink to={`/minis/${slug}`} {...restProps}>
      <Contents variant={variant}>
        <Arrow />
        <NavImage image={imgSrc} alt={miniature.name} />
        <Label>{miniature.name}</Label>
      </Contents>
    </NavLink>
  );
};

export default NavButton;
