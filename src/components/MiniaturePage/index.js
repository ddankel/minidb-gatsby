import React from "react";
import { Col, Row, Stack } from "react-bootstrap";
import styled from "styled-components";

import Gallery from "./Gallery";
import Navigator from "./Navigator";
import AttributeGrid from "./AttributeGrid";
import Breadcrumbs from "./Breadcrumbs";
import Recipes from "./Recipes";
import Text from "./Text";
import StatusBar from "./StatusBar";

export const Title = styled.h1``;

const MiniaturePage = ({ frontmatter, html }) => {
  return (
    <>
      <div>
        {/* Wrapping div is a fix for bug in rendering single-mini pages via direct link */}
        <Navigator current={frontmatter.slug} />
      </div>
      <StatusBar status={frontmatter?.minidb?.status} />
      <Breadcrumbs miniatureLines={frontmatter.line} name={frontmatter.name} />
      <Row style={{ marginTop: "2rem" }}>
        <Col sm={12} md={6} lg={5} style={{ marginBottom: "2rem" }}>
          <Gallery photos={frontmatter.photos} />
        </Col>
        <Col sm={12} md={6} lg={7}>
          <Title>{frontmatter.name}</Title>
          <hr />
          <Stack gap={4}>
            <AttributeGrid {...frontmatter} />
            <Text>{html}</Text>
            <Recipes recipes={frontmatter.recipes} />
          </Stack>
        </Col>
      </Row>
      <StatusBar status={frontmatter?.minidb?.status} />
    </>
  );
};

export default MiniaturePage;
