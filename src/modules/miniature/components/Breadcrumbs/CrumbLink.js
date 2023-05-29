import { Link } from "gatsby";
import queryString from "query-string";
import styled from "styled-components";

export const StyledLink = styled(Link).attrs({
  className: "text-white",
})`
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const CrumbLink = ({ to, line, children, ...restProps }) => {
  const query = queryString.stringify({ lineFilter: line });

  return (
    <StyledLink to={`/?${query}`} {...restProps}>
      {children}
    </StyledLink>
  );
};

export default CrumbLink;
