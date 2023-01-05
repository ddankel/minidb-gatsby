import React from "react";
import styled from "styled-components";
import _ from "lodash";

const LabelPart = styled("div")`
  && {
    margin-left: ${(props) => `${(props.indent || 0) * 0.33}rem`};
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;

    &::before {
      content: ">";
      margin-right: 0.5rem;
    }
  }
`;

const Label = ({ children }) => {
  const label = children;
  const labelParts = label.split(" > ");

  if (labelParts.length === 1) {
    return <>{_.startCase(children)}</>;
  }

  return <LabelPart indent={labelParts.length - 1}>{_.last(labelParts)}</LabelPart>;
};

export default Label;
