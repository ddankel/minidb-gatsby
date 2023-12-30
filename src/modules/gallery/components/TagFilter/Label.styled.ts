import styled from "styled-components";

type IndentedLabelProps = {
  indent: number;
};

export const IndentedLabel = styled("div")<IndentedLabelProps>`
  && {
    margin-left: ${(props) => `${(props.indent || 0) * 0.33}rem`};
    white-space: nowrap;
    display: flex;
    align-items: center;

    &::before {
      content: ">";
      margin-right: 0.33rem;
    }
  }
`;

export const CountPart = styled("span")`
  font-size: smaller;
  margin-left: 0.33rem;
`;

export const LabelPart = styled("span")`
  flex-shrink: 1;
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
`;
