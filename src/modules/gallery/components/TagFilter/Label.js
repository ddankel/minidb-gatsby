import React from "react";
import styled from "styled-components";
import _ from "lodash";

const LabelPart = styled("div")`
  && {
    margin-left: ${(props) => `${props.indent || 0}rem`};

    &:not(:first-child)::before {
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

  return (
    <>
      {labelParts.map((part, idx) => (
        <LabelPart key={part} indent={idx}>
          {part}
        </LabelPart>
      ))}
    </>
  );
};

export default Label;
