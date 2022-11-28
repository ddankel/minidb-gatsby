import styled, { css } from "styled-components";
import { GatsbyImage } from "gatsby-plugin-image";

export const Caption = styled.div`
  ${({ theme }) => {
    return css`
      display: flex;
      justify-content: center;
      align-content: center;
      flex-direction: column;
      height: 3.5rem;
      background-color: #303030;

      & > p {
        width ${theme.smallImageSize};
        font-size: 75%;
        text-align: center;
        margin: 0;
        padding: 0 5px 0 5px;

        @media (min-width: ${theme.largeImageBreakpoint}) {
          width: ${theme.largeImageSize};
        }
      }
    `;
  }}
`;

export const Miniature = styled.div`
  padding: 0.25rem;
  cursor: pointer;

  &:hover img {
    transition: transform 0.2s; /* Animation */
    transform: scale(1.25);
  }
`;

export const ImageContainer = styled.div`
  overflow: hidden;
`;

export const Image = styled(GatsbyImage)`
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
