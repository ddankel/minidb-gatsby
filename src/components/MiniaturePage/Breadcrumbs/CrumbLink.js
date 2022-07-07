import { Link, navigate } from "gatsby";
import React from "react";
import styled from "styled-components";
import { useFilterContext } from "../../../context/FilterContext";

export const StyledLink = styled(Link).attrs({
  className: "text-white",
})`
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const CrumbLink = ({ to, line, children, ...restProps }) => {
  const { setLineFilter } = useFilterContext();

  const handleClick = (event) => {
    event.preventDefault();
    console.log("foo");
    setLineFilter(line);
    navigate("/");
  };

  return (
    <StyledLink to={to} onClick={handleClick} {...restProps}>
      {children}
    </StyledLink>
  );
};

export default CrumbLink;
