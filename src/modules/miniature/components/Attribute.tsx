import styled from "styled-components";

const Container = styled("div")`
  display: flex;
`;

const Label = styled("div")`
  width: 4.5rem;
  margin-right: 1rem;
`;

const Values = styled("div")`
  flex-grow: 1;
`;

const ValueContent = styled("div")`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
`;

type AttributeProps = {
  label: string;
  children: React.ReactNode;
};

const Attribute = ({ label, children }: AttributeProps) => {
  return (
    <Container>
      <Label>{label}:</Label>
      <Values>
        <ValueContent>{children}</ValueContent>
      </Values>
    </Container>
  );
};

export default Attribute;
