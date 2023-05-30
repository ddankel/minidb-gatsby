import React from "react";
import { Form } from "react-bootstrap";
import styled from "styled-components";

import Label from "./Label";

const InputForm = styled(Form)({ fontSize: "14px" });

const TagFilter = ({ name, tagsAvailable, currentSelections, onAdd, onRemove }) => {
  const handleChange = (targetOption) => () => {
    const alreadySelected = currentSelections.includes(targetOption);
    alreadySelected ? onRemove(targetOption) : onAdd(targetOption);
  };

  if (!tagsAvailable) return;

  return (
    <InputForm>
      {tagsAvailable.map((tagOption) => {
        const { name: tagName, count: tagCount } = tagOption;
        const disabled = tagCount < 1;

        return (
          <React.Fragment key={tagName}>
            <InputForm.Check type="checkbox" id={`${name}-${tagName}`} name={`${name}`}>
              <InputForm.Check.Input
                type="checkbox"
                checked={currentSelections.includes(tagName)}
                onChange={handleChange(tagName)}
                disabled={disabled}
              />
              <InputForm.Check.Label style={{ display: "block" }} disabled={disabled}>
                <Label count={tagCount}>{tagName}</Label>
              </InputForm.Check.Label>
            </InputForm.Check>
          </React.Fragment>
        );
      })}
    </InputForm>
  );
};

const compareProps = (prevProps, nextProps) => {
  return JSON.stringify(prevProps) === JSON.stringify(nextProps);
};

export default React.memo(TagFilter, compareProps);
