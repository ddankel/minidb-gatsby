import useMiniature from "@/common/hooks/useMiniature";
import usePhotos from "@/common/hooks/usePhotos";

import { Contents, Label, LeftArrow, NavImage, NavLink, RightArrow } from "./styled";

type NavButtonProps = {
  slug: string;
  variant: string;
  className?: string;
};

const NavButton = ({ slug, variant, className }: NavButtonProps) => {
  const [imgSrc] = usePhotos(slug);
  const miniature = useMiniature(slug);

  if (!["prev", "next"].includes(variant)) {
    throw new Error(`Variant must be 'prev' or 'next'.  Recieved: '${variant}' instead.`);
  }

  const Arrow = variant === "prev" ? LeftArrow : RightArrow;
  const alt = miniature?.name || "thumbnail";

  return (
    <NavLink to={`/minis/${slug}`} className={className}>
      <Contents $variant={variant}>
        <Arrow />
        {imgSrc && <NavImage image={imgSrc} alt={alt} />}
        <Label>{miniature?.name}</Label>
      </Contents>
    </NavLink>
  );
};

export default NavButton;
