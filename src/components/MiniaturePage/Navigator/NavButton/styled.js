import styled from "styled-components";

import { Link } from "gatsby";
import GatsbyImage from "../../../GatsbyImage";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

export const Contents = styled.div`
  align-items: center;
  display: flex;
  flex-direction: ${({ variant }) => (variant === "prev" ? "row" : "row-reverse")};

  & > div {
    text-align: ${({ variant }) => (variant === "prev" ? "left" : "right")};
  }
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

export const NavLink = styled(Link).attrs({
  className: "text-white",
})`
  width: 50%;
  padding: 6px 12px;
  text-decoration: none;
`;

export const RightArrow = styled(BiChevronRight)`
  height: 32px;
  min-width: 32px;
  width: 32px;
`;
