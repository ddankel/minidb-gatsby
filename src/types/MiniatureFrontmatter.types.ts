import { ImageDataLike } from "gatsby-plugin-image";

export type MiniaturePhoto = ImageDataLike & {
  childImageSharp: {};
  publicURL: string;
};

export type MiniatureStatus = {
  status: string;
};

export type MiniatureFrontmatter = {
  slug: string;
  name: string;
  sku?: string;
  line: string[];
  painted?: string;
  status?: string;
  photos: MiniaturePhoto[];
  genre?: string[];
  race?: string[];
  archetype?: string[];
  weapons?: string[];
  armor?: string[];
  quantity?: number;
  recipes?: string[];
  minidb?: MiniatureStatus;
  gallery?: MiniatureStatus;
};
