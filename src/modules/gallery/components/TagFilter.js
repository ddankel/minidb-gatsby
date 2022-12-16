import React from "react";
import _ from "lodash";
import { Form } from "react-bootstrap";
import styled from "styled-components";

const InputForm = styled(Form)({ fontSize: "14px" });

const TagFilter = ({ name, options, value, onChange, multiple = false }) => {
  const handleChangeMultiple = (targetOption) => () => {
    const newValue = value.includes(targetOption)
      ? _.without(value, targetOption)
      : [...value, targetOption];

    onChange(newValue);
  };

  // Handle changes if multiple is false
  const handleChangeSingluar = (targetOption) => () => {
    const newValue = value.includes(targetOption) ? [] : [targetOption];
    return onChange(newValue);
  };

  const handleChange = multiple ? handleChangeMultiple : handleChangeSingluar;

  return (
    <InputForm>
      {options.map((tagOption) => (
        <div key={tagOption}>
          <InputForm.Check
            type="checkbox"
            id={`${name}-${tagOption}`}
            name={`${name}`}
            label={_.startCase(tagOption)}
            // TODO: ^ needs to work with miniature lines (ie not delete > )
            checked={value.includes(tagOption)}
            onChange={handleChange(tagOption)}
          />
        </div>
      ))}
    </InputForm>
  );
};

export default TagFilter;
