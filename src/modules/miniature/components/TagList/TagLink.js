import { Link, navigate } from "gatsby";
import React from "react";
import { Button } from "react-bootstrap";
import _ from "lodash";

import { useFilterStoreItem } from "@/hooks/useFilterStore";

const TagLink = ({ to, attribute, tag, ...restProps }) => {
  const setFilter = useFilterStoreItem("setFilter");

  const handleClick = (event) => {
    event.preventDefault();
    navigate(`/?${attribute}=${tag}`);
    setFilter(`${attribute}Filter`, tag, { merge: false });
  };

  return (
    <Button
      as={Link}
      className="badge"
      variant="secondary"
      to={`/?${attribute}=${tag}`}
      onClick={handleClick}
      {...restProps}
    >
      {_.startCase(tag)}
    </Button>
  );
};

export default TagLink;
