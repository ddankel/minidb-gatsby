import { GatsbyImage } from "gatsby-plugin-image";

/**
 * Higher order component to wrap GatsbyImage
 *
 * This HOC allows the passing of a "size" property (or "height" and
 * "width") to force the image to a fixed size.
 *
 */
const ModifiedGatsbyImage = ({ height, width, size, ...restProps }) => {
  width = size || width;
  height = size || height;

  return <GatsbyImage {...restProps} imgStyle={{ height, width }} style={{ height, width }} />;
};

export default ModifiedGatsbyImage;
