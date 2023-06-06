import { Link } from "gatsby";
import styled from "styled-components";

import { Container, Nav, Navbar } from "react-bootstrap";
import { BiSearch as BiSearchIcon } from "react-icons/bi";
import { FiFilter as FiFilterIcon } from "react-icons/fi";
import DestktopTooltip from "@/common/components/DesktopTooltip";

const StyledNavBar = styled(Navbar).attrs({
  variant: "dark",
  bg: "primary",
})`
  height: 3rem;
  margin-bottom: 3rem;
`;

const AppLayout = ({ onSearch, onFilter }) => {
  return (
    <StyledNavBar>
      <Container>
        <Navbar.Brand as={Link} to="/">
          Miniature DB
        </Navbar.Brand>
        <Nav>
          <DestktopTooltip id="nav-tooltip" variant="info" />
          <Nav.Link
            onClick={onFilter}
            data-tooltip-id="nav-tooltip"
            data-tooltip-html="Press <kbd>F</kbd> to filter"
            data-tooltip-place="bottom"
          >
            <FiFilterIcon className="me-2" />
            Filter
          </Nav.Link>
          <Nav.Link
            onClick={onSearch}
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

export default AppLayout;
