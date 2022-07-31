import { Link, navigate } from "gatsby";
import React from "react";
import { Badge } from "react-bootstrap";
import { useFilterContext } from "../../../../context/FilterContext";
import _ from "lodash";

const TagLink = ({ to, attribute, tag, ...restProps }) => {
  const { setRaceFilter, setArchetypeFilter, setWeaponFilter, setArmorFilter } = useFilterContext();

  const setFilter = (value) => {
    switch (attribute) {
      case "race":
        return setRaceFilter(value);
      case "archetype":
        return setArchetypeFilter(value);
      case "weapon":
        return setWeaponFilter(value);
      case "armor":
        return setArmorFilter(value);
      default:
    }
  };

  const handleClick = (event) => {
    event.preventDefault();
    navigate(`/?${attribute}=${tag}`);
    setFilter(tag);
  };

  return (
    <Link to={`/?${attribute}=${tag}`} onClick={handleClick} {...restProps}>
      <Badge bg="secondary">{_.startCase(tag)}</Badge>
    </Link>
  );
};

export default TagLink;
