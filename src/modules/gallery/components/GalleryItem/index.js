import { Link, navigate } from "gatsby";

import useMiniature from "@/common/hooks/useMiniature";
import usePhotos from "@/common/hooks/usePhotos";

import { Caption, Image, ImageContainer, Item } from "./styled";

const GalleryItem = ({ slug }) => {
  const mini = useMiniature(slug);
  const [imgSrc] = usePhotos(slug);

  return (
    <Item onClick={() => navigate(`/minis/${mini.slug}`)} callout={mini.isDraft}>
      <Link to={`/minis/${mini.slug}`}>
        <ImageContainer>
          <Image image={imgSrc} alt={mini.name} />
        </ImageContainer>
      </Link>
      <Caption>
        <p>{mini.name}</p>
      </Caption>
    </Item>
  );
};

export default GalleryItem;
