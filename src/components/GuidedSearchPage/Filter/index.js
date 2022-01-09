import React from "react";
import { Button, Col, Form, InputGroup, Row } from "react-bootstrap";
import { FaUndo } from "react-icons/fa";

const Filter = ({ value, setValue, defaultValue = "all", title, options = [] }) => {
  const [buttonVariant, setButtonVariant] = React.useState("secondary");
  const [isBtnDisabled, setIsBtnDisabled] = React.useState(true);

  React.useEffect(() => {
    setButtonVariant(value !== defaultValue ? "primary" : "secondary");
    setIsBtnDisabled(value !== defaultValue ? false : true);
  }, [value, defaultValue]);

  return (
    <Form.Group as={Row} className="mb-3">
      <Form.Label column sm={3}>
        {title}:
      </Form.Label>
      <Col sm={9}>
        <InputGroup>
          <Form.Select value={value} onChange={(e) => setValue(e.target.value)}>
            <option value="all">Any</option>
            {options
              .filter((item) => item !== null)
              .map((item) => (
                <option value={item} key={`id${item}`}>
                  {item}
                </option>
              ))}
          </Form.Select>
          <Button
            variant={buttonVariant}
            onClick={() => setValue(defaultValue)}
            disabled={isBtnDisabled}
          >
            <FaUndo />
          </Button>
        </InputGroup>
      </Col>
    </Form.Group>
  );
};

export default Filter;
