import styled from "styled-components";
import { Button } from "react-bootstrap";

const BadgeButton = styled(Button)`
  && {
    display: flex;
    align-items: center;
    border-radius: 1.25rem;
    padding-left: 0.75rem;
    padding-right: 0.75rem;
  }
`;
BadgeButton.defaultProps = { size: "sm" };

export default BadgeButton;
