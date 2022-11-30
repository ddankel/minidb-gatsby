import styled from "styled-components";

const Miniature = styled.div`
  padding: 0.25rem;
  cursor: pointer;
  outline: ${(props) => (!!props.callout ? "1px solid peru" : null)};
  outline-offset: ${(props) => (!!props.callout ? "-3px" : null)};

  &:hover img {
    transition: transform 0.2s; /* Animation */
    transform: scale(1.25);
  }
`;

export default Miniature;
