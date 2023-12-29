import { ImageDataLike } from "gatsby-plugin-image";

export type Photo = ImageDataLike & {
  childImageSharp: {};
  publicURL: string;
};
