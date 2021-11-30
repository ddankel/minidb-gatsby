import React from "react";

import MiniatureLayout from "../../layouts/MiniatureLayout";
import Gallery from "./Gallery";
import Navigator from "./Navigator";
import ContentTabs from "./ContentTabs";

import { MiniatureLine, Spacer, Title } from "./styled";

const MiniaturePage = ({ frontmatter, html }) => {
  const miniatureLine = [...frontmatter.line, ""].join(" > ");

  return (
    <MiniatureLayout>
      <Navigator current={frontmatter.slug} />
      <MiniatureLine>{miniatureLine}</MiniatureLine>
      <Title>{frontmatter.name}</Title>
      {frontmatter.painted && <p>Painted: {frontmatter.painted}</p>}
      <Gallery photos={frontmatter.photos} />
      <Spacer />
      <ContentTabs frontmatter={frontmatter} html={html} />
    </MiniatureLayout>
  );
};

export default MiniaturePage;
