import styled, { css } from "styled-components";

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

export default Caption;
