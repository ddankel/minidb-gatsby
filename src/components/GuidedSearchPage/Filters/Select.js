import { Form } from "react-bootstrap";
import styled from "styled-components";

const Select = styled(Form.Select)`
  word-wrap: break-word; /* IE*/
  white-space: -moz-pre-wrap; /* Firefox */
  white-space: pre-wrap; /* other browsers */
  display: inline-block;
`;

export default Select;
