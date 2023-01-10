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

const CountPart = styled("span")`
  font-size: smaller;
  margin-left: 0.25rem;
`;

const Label = ({ count, children }) => {
  const label = children;
  const labelParts = label.split(" > ");
  const countDisplay = !!count || count === 0 ? ` (${count})` : null;

  if (labelParts.length === 1) {
    return (
      <>
        {_.startCase(children)}
        <CountPart>{countDisplay}</CountPart>
      </>
    );
  }

  return (
    <LabelPart indent={labelParts.length - 1}>
      {_.last(labelParts)}
      {countDisplay}
    </LabelPart>
  );
};

export default Label;
