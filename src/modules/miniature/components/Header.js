import styled from "styled-components";

const Title = styled.h1``;
const Divider = styled.hr`
  margin-top: 0;
`;

const Header = ({ title }) => {
  return (
    <>
      <Title>{title}</Title>
      <Divider />
    </>
  );
};

export default Header;
