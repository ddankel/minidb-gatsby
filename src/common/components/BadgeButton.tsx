import { Button, ButtonProps } from "react-bootstrap";

const style = {
  display: "flex",
  alignItems: "center",
  borderRadius: "1.25rem",
  paddingLeft: "0.75rem",
  paddingRight: "0.75rem",
};

const BadgeButton = (props: ButtonProps) => {
  return <Button size="sm" style={style} {...props} />;
};

export default BadgeButton;
