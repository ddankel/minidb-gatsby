import React from "react";
import TagLink from "./TagLink";

const TagList = ({ attribute, tags = [] }) => {
  return (
    <>
      {tags.map((tag) => (
        <TagLink attribute={attribute} tag={tag} key={tag} />
      ))}
    </>
  );
};

export default TagList;
