import React from "react";
import { Col, Form, InputGroup, Row } from "react-bootstrap";

const Filter = ({ value, setValue, defaultValue, title, options = [] }) => {
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
          <button className="btn btn-primary" type="button" onClick={() => setValue(defaultValue)}>
            <i className="bi bi-arrow-clockwise" alt="reset"></i>
          </button>
        </InputGroup>
      </Col>
    </Form.Group>
  );
};

export default Filter;
