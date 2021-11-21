import styled from "styled-components";
import { Button } from "react-bootstrap";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import GatsbyImage from "../../../GatsbyImage";

export const Contents = styled.div`
  align-items: center;
  display: flex;
  flex-direction: ${({ variant }) => (variant === "prev" ? "row" : "row-reverse")};
`;

export const Control = styled(Button)`
  width: 50%;
  padding-left: 0px;
  padding-right: 0px;
`;

export const Label = styled.div.attrs({
  className: "mx-2 d-none d-sm-inline",
})``;

export const LeftArrow = styled(BiChevronLeft)`
  height: 32px;
  min-width: 32px;
  width: 32px;
`;

export const NavImage = styled(GatsbyImage).attrs({ size: "50px" })`
  border-radius: 50%;
  min-width: 50px;
`;

export const RightArrow = styled(BiChevronRight)`
  height: 32px;
  min-width: 32px;
  width: 32px;
`;
