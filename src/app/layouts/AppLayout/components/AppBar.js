import { Link } from "gatsby";
import styled from "styled-components";

import { Container, Nav, Navbar } from "react-bootstrap";
import { BiSearch as BiSearchIcon } from "react-icons/bi";
import DestktopTooltip from "@/common/components/DesktopTooltip";

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
          <DestktopTooltip id="search-tooltip" variant="info" />
          <Nav.Link
            onClick={onSearch}
            data-tooltip-id="search-tooltip"
            data-tooltip-html="Press <kbd>/</kbd> to Search"
            data-tooltip-place="bottom"
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
