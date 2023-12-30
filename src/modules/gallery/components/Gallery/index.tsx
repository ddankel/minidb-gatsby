import { Collection } from "@/common/models/Collection";
import GalleryItem from "../GalleryItem";
import { Wrapper } from "./styled";

type GalleryProps = {
  collection: Collection;
};

const Gallery = ({ collection }: GalleryProps) => {
  const minis = collection.toArray();

  return (
    <Wrapper>
      {minis && minis.map((mini, index) => <GalleryItem slug={mini.slug} key={index} />)}
    </Wrapper>
  );
};

export default Gallery;
