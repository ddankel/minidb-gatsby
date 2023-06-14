import { Link } from "gatsby";
import { Tooltip } from "react-tooltip";
import styled from "styled-components";

import { Container, Nav, Navbar } from "react-bootstrap";
import { BiSearch as BiSearchIcon } from "react-icons/bi";
import { useModalStateContext } from "../contexts/ModalStateProvider";

const StyledNavBar = styled(Navbar).attrs({
  variant: "dark",
  bg: "primary",
})`
  height: 3rem;
  margin-bottom: 3rem;
`;

const AppBar = () => {
  const { openSearch } = useModalStateContext();

  return (
    <StyledNavBar>
      <Container>
        <Navbar.Brand as={Link} to="/">
          Miniature DB
        </Navbar.Brand>
        <Nav>
          <Tooltip id="nav-tooltip" variant="info" />
          <Nav.Link
            onClick={openSearch}
            data-tooltip-id="nav-tooltip"
            data-tooltip-html="Press <kbd>/</kbd> to Search"
            data-tooltip-place="bottom"
            className="ms-4"
          >
            <BiSearchIcon className="me-2" />
            Search
          </Nav.Link>
        </Nav>
      </Container>
    </StyledNavBar>
  );
};

export default AppBar;
