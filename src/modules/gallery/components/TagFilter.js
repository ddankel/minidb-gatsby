import React from "react";
import _ from "lodash";
import { Form } from "react-bootstrap";
import styled from "styled-components";

const InputForm = styled(Form)({ fontSize: "14px" });

const TagFilter = ({ name, options, value, onAdd, onRemove }) => {
  const handleChange = (targetOption) => () => {
    const alreadySelected = value.includes(targetOption);
    alreadySelected ? onRemove(targetOption) : onAdd(targetOption);
  };

  return (
    <InputForm>
      {options.map((tagOption) => {
        // only do start case if > isn't present (not a mini line)
        const capitolizedLabel = tagOption
          .split(" > ")
          .map((part) => _.startCase(part))
          .join(" > ");

        return (
          <div key={tagOption}>
            <InputForm.Check type="checkbox" id={`${name}-${tagOption}`} name={`${name}`}>
              <InputForm.Check.Input
                type="checkbox"
                checked={value.includes(tagOption)}
                onChange={handleChange(tagOption)}
              />
              <InputForm.Check.Label>
                {capitolizedLabel.split(" > ").map((part, idx) => (
                  <div key={part} style={{ marginLeft: `${idx}rem` }}>
                    {idx > 0 && <span style={{ marginRight: "0.5rem" }}>&gt;</span>}
                    {part}
                  </div>
                ))}
              </InputForm.Check.Label>
            </InputForm.Check>
          </div>
        );
      })}
    </InputForm>
  );
};

export default TagFilter;
