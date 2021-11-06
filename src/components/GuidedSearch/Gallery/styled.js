import styled from "styled-components";

export const GalleryWrapper = styled.div`
  display: inline-flex;
  align-items: flex-start;
  align-content: flex-start;
  margin-left: auto;
  margin-right: auto;
  flex-wrap: wrap;
  justify-content: center;
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
  }
`;
