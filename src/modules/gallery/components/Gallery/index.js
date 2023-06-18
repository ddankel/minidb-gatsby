import GalleryItem from "../GalleryItem";
import { Wrapper } from "./styled";

const Gallery = ({ collection }) => {
  const minis = collection.toArray();

  return (
    <Wrapper>
      {minis && minis.map((mini, index) => <GalleryItem slug={mini.slug} key={index} />)}
    </Wrapper>
  );
};

export default Gallery;
