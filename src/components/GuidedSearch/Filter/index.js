import React from "react";
import { Button, Col, Form, InputGroup, Row } from "react-bootstrap";

const Filter = ({ value, setValue, defaultValue = "all", title, options = [] }) => {
  const buttonVariant = value !== defaultValue ? "primary" : "secondary";
  const isBtnDisabled = value !== defaultValue ? false : true;

  return (
    <Form.Group as={Row} className="mb-3">
      <Form.Label column sm={3}>
        {title}:
      </Form.Label>
      <Col sm={9}>
        <InputGroup>
          <Form.Select value={value} onChange={(e) => setValue(e.target.value)}>
            <option value="all">All</option>
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
            <i className="bi bi-arrow-clockwise" alt="reset"></i>
          </Button>
        </InputGroup>
      </Col>
    </Form.Group>
  );
};

export default Filter;
