import React from "react";
import styled, { css } from "styled-components";
import { Container } from "react-bootstrap";

const NarrowContainer = styled(Container)`
  && {
    max-width: 1200px;
  }
`;

const WideContainer = styled(Container)`
  ${({ theme }) => css`
    @media (min-width: ${theme.largeImageBreakpoint}) {
      padding-left: 4rem !important;
      padding-right: 4rem !important;
      max-width: 100% !important;
    }
  `}
`;

const ContentContainer = ({ children, variant, ...restProps }) => {
  let Wrapper = Container;
  if (variant === "narrow") Wrapper = NarrowContainer;
  if (variant === "wide") Wrapper = WideContainer;

  return <Wrapper {...restProps}>{children}</Wrapper>;
};
export default ContentContainer;
