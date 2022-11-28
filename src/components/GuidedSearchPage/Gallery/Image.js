import styled, { css } from "styled-components";
import { GatsbyImage } from "gatsby-plugin-image";

const Image = styled(GatsbyImage)`
  ${({ theme }) =>
    css`
      height: ${theme.smallImageSize};
      width: ${theme.smallImageSize};

      @media (min-width: ${theme.largeImageBreakpoint}) {
        height: ${theme.largeImageSize};
        width: ${theme.largeImageSize};
      }
    `}
`;

export default Image;
