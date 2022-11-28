import styled from "styled-components";
import { GatsbyImage } from "gatsby-plugin-image";

const largeImageBreakpoint = "1200px";
const smallImageSize = "100px";
const largeImageSize = "125px";

export const Caption = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
  height: 3.5rem;
  background-color: #303030;

  & > p {
    width ${smallImageSize};
    font-size: 75%;
    text-align: center;
    margin: 0;
    padding: 0 5px 0 5px;

    @media (min-width: ${largeImageBreakpoint}) {
      width: ${largeImageSize};
    }
  }
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
  height: ${smallImageSize};
  width: ${smallImageSize};

  @media (min-width: ${largeImageBreakpoint}) {
    height: ${largeImageSize};
    width: ${largeImageSize};
  }
`;
