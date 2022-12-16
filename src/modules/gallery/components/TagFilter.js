import React from "react";
import _ from "lodash";
import { Form } from "react-bootstrap";
import styled from "styled-components";

const InputForm = styled(Form)({ fontSize: "14px" });

const formatLabel = (rawLabel) => {
  const parts = rawLabel.split(" > ");

  if (parts.length === 1) return rawLabel;

  const spacers = parts.length - 1;
  let output = "";
  for (let i = 0; i < spacers; i++) {
    output = output + "&nbsp;&nbsp;&nbsp;&nbsp;   ";
  }

  output = output + _.last(parts);
  return output;
};

const TagFilter = ({ name, options, value, onChange, onAdd, onRemove, multiple = false }) => {
  const handleChange = (targetOption) => () => {
    const alreadySelected = value.includes(targetOption);
    alreadySelected ? onRemove(targetOption) : onAdd(targetOption);
  };

  return (
    <InputForm>
      {options.map((tagOption) => {
        const label = tagOption
          .split(" > ")
          .map((part) => _.startCase(part))
          .join(" > ");

        return (
          <div key={tagOption}>
            <InputForm.Check
              type="checkbox"
              id={`${name}-${tagOption}`}
              name={`${name}`}
              // label={label}
              label={formatLabel(label)}
              checked={value.includes(tagOption)}
              onChange={handleChange(tagOption)}
            />
          </div>
        );
      })}
    </InputForm>
  );
};

export default TagFilter;
