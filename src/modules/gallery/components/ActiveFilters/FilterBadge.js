import React from "react";
import { IoMdCloseCircle } from "react-icons/io";
import _ from "lodash";

import BadgeButton from "@/components/BadgeButton";

const FilterBadge = ({ text, onClick, ...restProps }) => {
  const handleClick = () => onClick(text);

  return (
    <BadgeButton onClick={handleClick} variant="secondary" {...restProps}>
      {_.startCase(text)}
      <IoMdCloseCircle style={{ marginLeft: "0.5rem" }} />
    </BadgeButton>
  );
};

export default FilterBadge;
