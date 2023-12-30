import { Link, navigate } from "gatsby";

import useMiniature from "@/common/hooks/useMiniature";
import usePhotos from "@/common/hooks/usePhotos";

import { Caption, Image, ImageContainer, Item } from "./styled";

type GalleryItemProps = {
  slug: string;
};

const GalleryItem = ({ slug }: GalleryItemProps) => {
  const mini = useMiniature(slug);
  const [imgSrc] = usePhotos(slug);

  if (!mini) return null;

  return (
    <Item onClick={() => navigate(`/minis/${mini.slug}`)} $callout={mini.isDraft}>
      <Link to={`/minis/${mini.slug}`}>
        {imgSrc && (
          <ImageContainer>
            <Image image={imgSrc} alt={mini.name} />
          </ImageContainer>
        )}
      </Link>
      <Caption>
        <p>{mini.name}</p>
      </Caption>
    </Item>
  );
};

export default GalleryItem;
