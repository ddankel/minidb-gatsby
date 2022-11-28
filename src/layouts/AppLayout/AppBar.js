import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";

import { Container, Nav, Navbar } from "react-bootstrap";
import { BiSearch } from "react-icons/bi";

const StyledNavBar = styled(Navbar).attrs({
  variant: "dark",
  bg: "primary",
})`
  height: 3rem;
  margin-bottom: 3rem;
`;

const AppLayout = ({ onSearch }) => {
  return (
    <StyledNavBar>
      <Container>
        <Navbar.Brand as={Link} to="/">
          Miniature DB
        </Navbar.Brand>
        <Nav>
          <Nav.Link onClick={onSearch}>
            <BiSearch />
            Search
          </Nav.Link>
        </Nav>
      </Container>
    </StyledNavBar>
  );
};

export default AppLayout;
