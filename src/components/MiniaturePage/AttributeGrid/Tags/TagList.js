import React from "react";
import TagLink from "./TagLink";

const TagList = ({ attribute, tags = [] }) => {
  return (
    <>
      {tags.map((tag) => (
        <TagLink attribute={attribute} tag={tag} key={tag} style={{ marginRight: "5px" }} />
      ))}
    </>
  );
};

export default TagList;
