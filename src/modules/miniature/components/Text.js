import React from "react";

const Text = ({ children }) => {
  if (!children) return null;

  return <div className="post-body" dangerouslySetInnerHTML={{ __html: children }} />;
};

export default Text;
