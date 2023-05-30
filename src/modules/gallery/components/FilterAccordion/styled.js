import Accordion from "react-bootstrap/Accordion";
import styled from "styled-components";

export const Item = styled(Accordion.Item)`
  && {
    border: none;
  }
`;

export const Header = styled(Accordion.Header)`
  && .accordion-button {
    background: var(--bs-body-bg);
    color: var(--bs-body-color);
    // padding: 0.75rem;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    box-shadow: none;

    &:not(.collapsed) {
      border-bottom: 0.5px solid var(--bs-gray-700);
    }

    &::after {
      background-image: var(--bs-accordion-btn-icon);
    }
  }
`;

export const Body = styled(Accordion.Body)`
  && {
    padding-top: 0.5rem;
    padding-right: 0.5rem;
    padding-left: 1.5rem;
    padding-bottom: 1rem;
  }
`;
