import { last, startCase } from "lodash";

import { CountPart, IndentedLabel, LabelPart } from "./Label.styled";

type LabelProps = {
  count: number;
  children: string;
};

const Label = ({ count, children }: LabelProps) => {
  const label = children;
  const labelParts = label.split(" > ");
  const countDisplay = !!count || count === 0 ? ` (${count})` : null;

  if (labelParts.length === 1) {
    return (
      <>
        {startCase(children)}
        <CountPart>{countDisplay}</CountPart>
      </>
    );
  }

  return (
    <IndentedLabel indent={labelParts.length - 1}>
      <LabelPart>{last(labelParts)}</LabelPart>
      <CountPart>{countDisplay}</CountPart>
    </IndentedLabel>
  );
};

export default Label;
