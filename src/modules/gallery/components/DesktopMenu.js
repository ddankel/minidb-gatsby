import React from "react";
import styled from "styled-components";

import Accordion from "../components/Accordion";

import Filters from "./Filters";
import NewFilters from "./NewFilters";

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
      <Accordion />
      <hr />
      <NewFilters />
      <hr />
      <Filters btnClass="w-100" />
    </Container>
  );
};

export default DesktopMenu;
