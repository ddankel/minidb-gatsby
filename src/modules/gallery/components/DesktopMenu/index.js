import React from "react";
import FilterAccordion from "../FilterAccordion";
import { Container, Title } from "./index.styled";

const DesktopMenu = () => {
  return (
    <Container>
      <Title>Filter Collection</Title>
      <FilterAccordion />
    </Container>
  );
};

export default DesktopMenu;
