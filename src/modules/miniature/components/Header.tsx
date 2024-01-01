import styled from "styled-components";

const Title = styled.h1``;
const Divider = styled.hr`
  margin-top: 0;
`;

type HeaderProps = {
  title: string;
};

const Header = ({ title }: HeaderProps) => {
  return (
    <>
      <Title>{title}</Title>
      <Divider />
    </>
  );
};

export default Header;
