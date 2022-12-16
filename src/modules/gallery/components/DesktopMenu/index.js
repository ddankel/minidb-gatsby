import React from "react";
import styled from "styled-components";
import FilterAccordion from "./FilterAccordion";

// import Accordion from "../Accordion";

// import Filters from "./Filters";
// import NewFilters from "./NewFilters";
// import NewFilters from "./OBSOLETENewFilters";

const Container = styled.div.attrs({
  className: "d-none d-md-block",
})`
  width: 250px;
  min-width: 250px;
  margin-top: -33px;
  position: sticky;
  top: 0;
`;

const DesktopMenu = () => {
  return (
    <Container>
      <FilterAccordion />
    </Container>
  );
};

export default DesktopMenu;
