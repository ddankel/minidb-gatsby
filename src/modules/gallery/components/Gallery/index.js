import GalleryItem from "../GalleryItem";
import { Wrapper } from "./styled";

const Gallery = ({ minis }) => {
  return (
    <Wrapper>
      {minis && minis.map((mini, index) => <GalleryItem slug={mini.slug} key={index} />)}
    </Wrapper>
  );
};

export default Gallery;
