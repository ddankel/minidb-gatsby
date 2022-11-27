import styled from "styled-components";
import { GatsbyImage } from "gatsby-plugin-image";

const largeImageBreakpoint = "1200px";

export const Caption = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
  height: 3.5rem;
  background-color: #303030;

  & > p {
    width: 100px;
    font-size: 75%;
    text-align: center;
    margin: 0;
    padding: 0 5px 0 5px;

    @media (min-width: ${largeImageBreakpoint}) {
      width: 150px;
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
  height: 100px;
  width: 100px;

  @media (min-width: ${largeImageBreakpoint}) {
    height: 150px;
    width: 150px;
  }
`;
