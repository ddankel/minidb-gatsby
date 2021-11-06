import React from "react";
import { Container } from "react-bootstrap";
import AppLayout from "./AppLayout";

const MiniatureLayout = ({ children }) => {
  return (
    <AppLayout>
      <Container style={{ maxWidth: "650px" }}>{children}</Container>
    </AppLayout>
  );
};

export default MiniatureLayout;
