import _ from "lodash";

import { CountPart, IndentedLabel, LabelPart } from "./Label.styled";

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
    <IndentedLabel indent={labelParts.length - 1}>
      <LabelPart>{_.last(labelParts)}</LabelPart>
      <CountPart>{countDisplay}</CountPart>
    </IndentedLabel>
  );
};

export default Label;
