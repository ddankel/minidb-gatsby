import React from "react";
import styled from "styled-components";

const Bar = styled.hr`
  border: none;
  border-top: 4px double peru;
  color: orange;
  overflow: visible;
  text-align: center;
  height: 5px;
  opacity: 100%;

  &:after {
    background: var(--bs-body-bg);
    content: "${(props) => props.caption}";
    padding: 0 4px;
    position: relative;
    top: -13px;
  }
`;

const DraftStatusBar = () => {
  return <Bar caption="DRAFT" />;
};
export default DraftStatusBar;
