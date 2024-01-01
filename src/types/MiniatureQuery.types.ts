import { MiniatureFrontmatter } from "./MiniatureFrontmatter.types";

export type MultipleMiniatureQueryData = {
  allMarkdownRemark: {
    nodes: MiniatureNode[];
  };
};

// query by slug
export type SingleMiniatureQueryData = {
  markdownRemark: MiniatureNode;
};

export type MiniatureNode = {
  frontmatter: MiniatureFrontmatter;
  html?: string;
};
