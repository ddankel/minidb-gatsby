import React from "react";

import Gallery from "./Gallery";
import Navigator from "./Navigator";
import ContentTabs from "./ContentTabs";

import { MiniatureLine, Spacer, Title } from "./styled";

const MiniaturePage = ({ frontmatter, html }) => {
  const miniatureLine = [...frontmatter.line, ""].join(" > ");

  return (
    <>
      <div>
        {/* Wrapping div is a fix for bug in rendering single-mini pages via
            direct link */}
        <Navigator current={frontmatter.slug} />
      </div>
      <MiniatureLine>{miniatureLine}</MiniatureLine>
      <Title>{frontmatter.name}</Title>
      {frontmatter.painted && <p>Painted: {frontmatter.painted}</p>}
      <Gallery photos={frontmatter.photos} />
      <Spacer />
      <ContentTabs frontmatter={frontmatter} html={html} />
    </>
  );
};

export default MiniaturePage;
