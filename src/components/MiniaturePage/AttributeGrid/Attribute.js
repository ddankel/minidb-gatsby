import React from "react";
import styled from "styled-components";

const Container = styled("div")`
  display: flex;
`;

const Label = styled("div")`
  width: 4rem;
  margin-right: 1rem;
`;

const Values = styled("div")`
  width: 100%;
`;

const Attribute = ({ label, children }) => {
  return (
    <Container>
      <Label>{label}:</Label>
      <Values>{children}</Values>
    </Container>
  );
};

export default Attribute;
