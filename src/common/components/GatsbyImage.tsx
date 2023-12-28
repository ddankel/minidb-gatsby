import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";

type ModifyGatsbyImageProps = {
  height?: number;
  width?: number;
  size?: number;
  image: IGatsbyImageData;
  alt: string;
};

/**
 * Higher order component to wrap GatsbyImage
 *
 * This HOC allows the passing of a "size" property (or "height" and
 * "width") to force the image to a fixed size.
 *
 */
const ModifiedGatsbyImage = (props: ModifyGatsbyImageProps) => {
  const { size, image, alt, ...restProps } = props;
  let { height, width } = props;
  width = size || width;
  height = size || height;

  return (
    <GatsbyImage
      {...restProps}
      imgStyle={{ height, width }}
      style={{ height, width }}
      image={image}
      alt={alt}
    />
  );
};

export default ModifiedGatsbyImage;
