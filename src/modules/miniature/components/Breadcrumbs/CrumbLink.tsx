import { Link } from "gatsby";
import queryString from "query-string";
import React from "react";
import styled from "styled-components";

const StyledLink = styled(Link).attrs({
  className: "text-white",
})`
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

type CrumbLinkProps = {
  to: string;
  line: string;
  children: React.ReactNode;
};

const CrumbLink = ({ to, line, children, ...restProps }: CrumbLinkProps) => {
  const query = queryString.stringify({ lineFilter: line });

  return (
    <StyledLink to={`/?${query}`} {...restProps}>
      {children}
    </StyledLink>
  );
};

export default CrumbLink;
