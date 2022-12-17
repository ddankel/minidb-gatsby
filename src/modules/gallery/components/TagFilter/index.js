import React from "react";
import { Form } from "react-bootstrap";
import styled from "styled-components";
import _ from "lodash";

import Label from "./Label";

const InputForm = styled(Form)({ fontSize: "14px" });

const TagFilter = ({ name, options, value, onAdd, onRemove }) => {
  const handleChange = (targetOption) => () => {
    const alreadySelected = value.includes(targetOption);
    alreadySelected ? onRemove(targetOption) : onAdd(targetOption);
  };

  return (
    <InputForm>
      {options.map((tagOption) => {
        return (
          <React.Fragment key={tagOption}>
            <InputForm.Check type="checkbox" id={`${name}-${tagOption}`} name={`${name}`}>
              <InputForm.Check.Input
                type="checkbox"
                checked={value.includes(tagOption)}
                onChange={handleChange(tagOption)}
              />
              <InputForm.Check.Label>
                <Label>{tagOption}</Label>
              </InputForm.Check.Label>
            </InputForm.Check>
          </React.Fragment>
        );
      })}
    </InputForm>
  );
};

export default TagFilter;
