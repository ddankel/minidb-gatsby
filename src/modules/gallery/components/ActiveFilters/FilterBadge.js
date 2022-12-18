import React from "react";
import styled from "styled-components";
import { Button } from "react-bootstrap";
import { IoMdCloseCircle } from "react-icons/io";
import _ from "lodash";

const BadgeButton = styled(Button)`
  && {
    display: flex;
    align-items: center;
    border-radius: 1.25rem;
    padding-left: 0.75rem;
    padding-right: 0.75rem;
  }
`;

const FilterBadge = ({ text, onClick, ...restProps }) => {
  const handleClick = () => onClick(text);

  return (
    <BadgeButton onClick={handleClick} variant="secondary" size="sm" {...restProps}>
      {_.startCase(text)}
      <IoMdCloseCircle style={{ marginLeft: "0.5rem" }} />
    </BadgeButton>
  );
};

export default FilterBadge;
