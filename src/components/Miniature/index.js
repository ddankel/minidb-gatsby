import React from "react";
import { Container } from "react-bootstrap";
import styled from "styled-components";

import splitRenderedHtml from "../../utils/split_rendered_html";
import Gallery from "./Gallery";
import InfoTabs from "./InfoTabs";
import TagList from "./TagList";

const Spacer = styled.div`
  height: 2rem;
`;

const Miniature = ({ frontmatter, html }) => {
  const bodySections = splitRenderedHtml(html);
  const miniatureLine = [...frontmatter.line, frontmatter.name].join(" > ");

  return (
    <Container style={{ maxWidth: "600px" }}>
      <h1>{frontmatter.name}</h1>
      <p>{miniatureLine}</p>
      {frontmatter.painted && <p>Painted: {frontmatter.painted}</p>}
      <Gallery photos={frontmatter.photos} />
      <Spacer />
      {bodySections.length ? (
        <InfoTabs frontmatter={frontmatter} bodySections={bodySections} />
      ) : (
        <TagList frontmatter={frontmatter} />
      )}
    </Container>
  );
};

export default Miniature;
