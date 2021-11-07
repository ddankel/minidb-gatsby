import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import styled from "styled-components";
import { Link } from "gatsby";
import SSRProvider from "react-bootstrap/SSRProvider";

const StyledNavbar = styled(Navbar)`
  margin-bottom: 2rem;
  height: 50px;
`;

const AppLayout = ({ children }) => {
  return (
    <SSRProvider>
      <StyledNavbar variant="dark" bg="primary">
        <Container>
          <Navbar.Brand as={Link} to="/">
            Miniature DB
          </Navbar.Brand>
          <Nav>
            <Nav.Link as={Link} to="/">
              Guided Search
            </Nav.Link>
            <Nav.Link as={Link} to="/about">
              About
            </Nav.Link>
          </Nav>
        </Container>
      </StyledNavbar>
      {children}
    </SSRProvider>
  );
};

export default AppLayout;
