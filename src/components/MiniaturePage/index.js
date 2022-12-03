import React from "react";
import { Col, Row, Stack } from "react-bootstrap";
import styled from "styled-components";

import Gallery from "./Gallery";
import Navigator from "./Navigator";
import AttributeGrid from "./AttributeGrid";
import Breadcrumbs from "./Breadcrumbs";
import Recipes from "./Recipes";
import Text from "./Text";

import Miniature from "../../models/Miniature";
import DraftStatusBar from "./DraftStatusBar";

const Title = styled.h1``;

const MiniaturePage = ({ frontmatter, html }) => {
  const miniature = new Miniature({ frontmatter, html });

  return (
    <>
      <div>
        {/* Wrapping div is a fix for bug in rendering single-mini pages via direct link */}
        <Navigator current={miniature.slug} />
      </div>
      {miniature.isDraft && <DraftStatusBar />}
      <Breadcrumbs miniatureLines={miniature.lineArray} name={miniature.name} />
      <Row style={{ marginTop: "2rem" }}>
        <Col sm={12} md={6} lg={5} style={{ marginBottom: "2rem" }}>
          <Gallery photos={miniature.photos} />
        </Col>
        <Col sm={12} md={6} lg={7}>
          <Title>{miniature.name}</Title>
          <hr />
          <Stack gap={4}>
            <AttributeGrid
              quantity={miniature.quantity}
              raceTags={miniature.raceTags}
              archtypeTags={miniature.archtypeTags}
              weaponTags={miniature.weaponTags}
              armorTags={miniature.armorTags}
              paintedAt={miniature.paintedAt}
              paintedState={miniature.paintedState}
            />
            <Text>{html}</Text>
            <Recipes recipes={miniature.recipes} />
          </Stack>
        </Col>
      </Row>
      {miniature.isDraft && <DraftStatusBar />}
    </>
  );
};

export default MiniaturePage;
