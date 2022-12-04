import { Link, navigate } from "gatsby";
import React from "react";
import styled from "styled-components";
import { useFilterStoreItem } from "@/hooks/useFilterStore";

export const StyledLink = styled(Link).attrs({
  className: "text-white",
})`
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const CrumbLink = ({ to, line, children, ...restProps }) => {
  const setFilter = useFilterStoreItem("setFilter");

  const handleClick = (event) => {
    event.preventDefault();
    navigate(`/`);
    setFilter("lineFilter", line, { merge: false });
  };

  return (
    <StyledLink to={`/?line=${line}`} onClick={handleClick} {...restProps}>
      {children}
    </StyledLink>
  );
};

export default CrumbLink;
