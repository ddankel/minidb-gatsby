import { Link, navigate } from "gatsby";
import React from "react";
import { Badge } from "react-bootstrap";
import _ from "lodash";
import { useStoreItem } from "../../../../hooks/useStore";

const TagLink = ({ to, attribute, tag, ...restProps }) => {
  const setFilter = useStoreItem("setFilter");

  const handleClick = (event) => {
    event.preventDefault();
    navigate(`/?${attribute}=${tag}`);
    setFilter(`${attribute}Filter`, tag, { merge: false });
  };

  return (
    <Link to={`/?${attribute}=${tag}`} onClick={handleClick} {...restProps}>
      <Badge bg="secondary">{_.startCase(tag)}</Badge>
    </Link>
  );
};

export default TagLink;
