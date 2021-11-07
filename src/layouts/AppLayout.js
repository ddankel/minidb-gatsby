import React from "react";
import { Link } from "gatsby";

import { Container, Nav, Navbar } from "react-bootstrap";
import SSRProvider from "react-bootstrap/SSRProvider";
import { BiSearch } from "react-icons/bi";
import styled from "styled-components";

import SearchModal from "../components/SearchModal";

const StyledNavbar = styled(Navbar)`
  margin-bottom: 2rem;
  height: 50px;
`;

const AppLayout = ({ children }) => {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <SSRProvider>
      <StyledNavbar variant="dark" bg="primary">
        <Container>
          <Navbar.Brand as={Link} to="/">
            Miniature DB
          </Navbar.Brand>
          <Nav>
            <Nav.Link onClick={() => setModalShow(true)}>
              <BiSearch />
            </Nav.Link>
            <Nav.Link as={Link} to="/">
              Index
            </Nav.Link>
          </Nav>
        </Container>
      </StyledNavbar>
      <SearchModal show={modalShow} onHide={() => setModalShow(false)} />
      {children}
    </SSRProvider>
  );
};

export default AppLayout;
