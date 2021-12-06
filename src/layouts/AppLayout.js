import React from "react";
import { Link } from "gatsby";

import { Container, Nav, Navbar } from "react-bootstrap";
import styled from "styled-components";
import SSRProvider from "react-bootstrap/SSRProvider";
import { BiSearch } from "react-icons/bi";

import SearchModal from "../components/SearchModal";

const StyledNavbar = styled(Navbar)`
  height: 3rem;
  margin-bottom: 3rem;
`;

const Contents = styled(Container)`
  max-width: ${({ variant }) => (variant === "narrow" ? "650px !important" : null)};
`;

const AppLayout = ({ children, variant }) => {
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
      <Contents variant={variant}>{children}</Contents>
    </SSRProvider>
  );
};

export default AppLayout;
