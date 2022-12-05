import React from "react";
import styled from "styled-components";

import Filters from "./Filters";

const Container = styled.div.attrs({
  className: "d-md-none mx-3",
})`
  margin-bottom: 4rem;
`;

const MobileMenu = () => {
  return (
    <Container>
      <Filters btnClass="float-end" />
    </Container>
  );
};

export default MobileMenu;
