import { Col, Row, Stack } from "react-bootstrap";
import styled from "styled-components";

// Responsive Layout
export const ResponsiveContent = styled(Row)`
  && {
    margin-top: 2rem;
  }
`;

export const InfoSection = styled(Col).attrs({ ms: 12, md: 6, lg: 7 })``;

export const PhotoSection = styled(Col).attrs({ sm: 12, md: 6, lg: 5 })({ marginBottom: "2rem" });

// Info Section
export const InfoStack = styled(Stack).attrs({ gap: 4 })``;

export const AttributeStack = styled(Stack).attrs({ gap: 1 })``;

export const DraftStatusBar = styled.hr`
  border: none;
  border-top: 4px double peru;
  color: orange;
  overflow: visible;
  text-align: center;
  height: 5px;
  opacity: 100%;

  &:after {
    background: var(--bs-body-bg);
    content: "DRAFT";
    padding: 0 4px;
    position: relative;
    top: -13px;
  }
`;
