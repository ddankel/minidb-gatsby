import styled from "styled-components";

const Miniature = styled.div`
  padding: 0.25rem;
  cursor: pointer;

  &:hover img {
    transition: transform 0.2s; /* Animation */
    transform: scale(1.25);
  }
`;

export default Miniature;
