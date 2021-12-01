import React from "react";
import { Link } from "gatsby";

import { Container, Nav, Navbar } from "react-bootstrap";
import styled from "styled-components";
import SSRProvider from "react-bootstrap/SSRProvider";
import { BiSearch } from "react-icons/bi";

import SearchModal from "../components/SearchModal";

const StyledNavbar = styled(Navbar)`
  margin-bottom: 2rem;
  height: 50px;
`;

const AppLayout = ({ children }) => {
  const [modalShow, setModalShow] = React.useState(false);

  React.useEffect(() => {
    const handleSearchShortcut = (e) => {
      if (e.key !== "/") return;

      e.preventDefault();
      setModalShow(true);
    };
    window.addEventListener("keydown", handleSearchShortcut);
    return () => window.removeEventListener("keydown", handleSearchShortcut);
  }, []);

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
              Search
            </Nav.Link>
            <Nav.Link as={Link} to="/">
              Home
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
