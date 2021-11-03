import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import styled from "styled-components";
import { Link } from "gatsby";

const StyledNavbar = styled(Navbar)`
  margin-bottom: 2rem;
  height: 50px;
`;

const PageLayout = ({ children }) => {
  return (
    <>
      <StyledNavbar variant="dark" bg="primary">
        <Container>
          <Navbar.Brand as={Link} href="/">
            Miniature DB
          </Navbar.Brand>
          <Nav>
            <Nav.Link as={Link} href="/guided_search">
              Guided Search
            </Nav.Link>
            <Nav.Link as={Link} href="/">
              Painted Gallery
            </Nav.Link>
          </Nav>
        </Container>
      </StyledNavbar>
      {children}
    </>
  );
};

export default PageLayout;
