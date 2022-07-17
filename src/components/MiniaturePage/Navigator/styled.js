import styled from "styled-components";

export const Wrapper = styled.div`
  margin-top: -3rem;
  margin-bottom: 1.5rem;
`;

export const Contents = styled.div`
  background-color: rgb(55, 90, 127);
  border-radius: 0 0 0.25rem 0.25rem;
`;

export const ToggleButton = styled.div`
  && {
    border-radius: 0 0 0.25rem 0.25rem;
    cursor: pointer;
    font-size: 75%;
    line-height: 0.5;
    padding: 0.25rem 0.5rem;
    width: fit-content;
  }
`;
