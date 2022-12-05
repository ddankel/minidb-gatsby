import React from "react";
import styled from "styled-components";

import Filters from "./Filters";

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
      <Filters btnClass="w-100" />
    </Container>
  );
};

export default DesktopMenu;
