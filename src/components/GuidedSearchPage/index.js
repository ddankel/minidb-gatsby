import React from "react";
import styled from "styled-components";
import { Row, Col } from "react-bootstrap";

import Filters from "./Filters";
import Gallery from "./Gallery";
import { useFilterContext } from "../../context/FilterContext";

const Spacer = styled.div`
  height: 3rem;
`;

const Menu = styled.div`
  margin-top: -33px;
  position: sticky;
  top: 0;
`;

const SmFilterContainer = styled.div.attrs({
  className: "d-md-none mx-3",
})``;

const GuidedSearchPage = () => {
  const { filteredMiniatures } = useFilterContext();

  return (
    <Row>
      <Col md={4} lg={3} className="d-none d-md-block">
        <Menu>
          <Filters btnClass="w-100" />
        </Menu>
      </Col>
      <Col sm={12} md={8} lg={9}>
        <SmFilterContainer>
          <Filters btnClass="float-end" />
          <Spacer />
        </SmFilterContainer>
        <Gallery minis={filteredMiniatures} />
      </Col>
    </Row>
  );
};

export default GuidedSearchPage;
