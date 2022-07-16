import React from "react";

import Gallery from "./Gallery";
import Navigator from "./Navigator";
import ContentTabs from "./ContentTabs";

import { Spacer, Title } from "./styled";
import Breadcrumbs from "./Breadcrumbs";

const MiniaturePage = ({ frontmatter, html }) => {
  return (
    <>
      <div>
        {/* Wrapping div is a fix for bug in rendering single-mini pages via direct link */}
        <Navigator current={frontmatter.slug} />
      </div>
      <Breadcrumbs miniatureLines={frontmatter.line} />
      <Title>{frontmatter.name}</Title>
      {frontmatter.painted && <p>Painted: {frontmatter.painted}</p>}
      <Gallery photos={frontmatter.photos} />
      <Spacer />
      <ContentTabs frontmatter={frontmatter} html={html} />
    </>
  );
};

export default MiniaturePage;
