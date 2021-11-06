import React from "react";
import { Container } from "react-bootstrap";
import AppLayout from "./AppLayout";

const PageLayout = ({ children }) => {
  return (
    <AppLayout>
      <Container>{children}</Container>
    </AppLayout>
  );
};

export default PageLayout;
