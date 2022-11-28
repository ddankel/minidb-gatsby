import React from "react";
import { Link } from "gatsby";

import { Container, Nav, Navbar } from "react-bootstrap";
import styled from "styled-components";
import SSRProvider from "react-bootstrap/SSRProvider";
import { BiSearch } from "react-icons/bi";

import { ThemeProvider } from "styled-components";

import SearchModal from "../components/SearchModal";

const theme = {
  largeImageBreakpoint: "1200px",
  smallImageSize: "100px",
  largeImageSize: "125px",
};

const StyledNavbar = styled(Navbar)`
  height: 3rem;
  margin-bottom: 3rem;
`;

const NarrowContents = styled(Container)`
  max-width: 1200px;
`;

const Contents = styled(Container)`
  @media (min-width: 1200px) {
    padding-left: 4rem !important;
    padding-right: 4rem !important;
    max-width: 100% !important;
  }
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

  const ContainerComponent = variant === "narrow" ? NarrowContents : Contents;

  return (
    <ThemeProvider theme={theme}>
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
            </Nav>
          </Container>
        </StyledNavbar>
        <SearchModal show={modalShow} onHide={() => setModalShow(false)} />
        <ContainerComponent>{children}</ContainerComponent>
      </SSRProvider>
    </ThemeProvider>
  );
};

export default AppLayout;
