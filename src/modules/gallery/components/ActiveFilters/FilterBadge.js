import React from "react";
import { Button } from "react-bootstrap";
import { IoMdCloseCircle } from "react-icons/io";
import _ from "lodash";

const FilterBadge = ({ text, onClick, ...restProps }) => {
  const handleClick = () => onClick(text);

  return (
    <Button
      onClick={handleClick}
      variant="secondary"
      size="sm"
      {...restProps}
      style={{
        display: "flex",
        alignItems: "center",
        borderRadius: "1.25rem",
        paddingLeft: "1rem",
        paddingRight: "1rem",
      }}
    >
      <span>{_.startCase(text)}</span>
      <IoMdCloseCircle style={{ marginLeft: "0.5rem" }} />
    </Button>
  );
};

export default FilterBadge;
