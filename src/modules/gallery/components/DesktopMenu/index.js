import React from "react";
import styled from "styled-components";
import FilterAccordion from "./FilterAccordion";

const Container = styled.div.attrs({
  className: "d-none d-md-block",
})`
  width: 250px;
  min-width: 250px;
  margin-top: -33px;
  margin-right: 1rem;
`;

const DesktopMenu = () => {
  return (
    <Container>
      <h6 style={{ marginTop: "1rem" }}>Filters</h6>
      <FilterAccordion />
    </Container>
  );
};

export default DesktopMenu;
