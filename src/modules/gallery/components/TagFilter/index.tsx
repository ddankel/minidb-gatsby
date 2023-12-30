import React from "react";
import { Form } from "react-bootstrap";
import styled from "styled-components";

import { TagCount } from "@/common/models/TagIndex/types";

import Label from "./Label";

const InputForm = styled(Form)({ fontSize: "14px" });

type TagFilterProps = {
  name: string;
  tagsAvailable: TagCount[];
  currentSelections: string[];
  onAdd: (item: string) => void;
  onRemove: (item: string) => void;
};

const TagFilter = ({ name, tagsAvailable, currentSelections, onAdd, onRemove }: TagFilterProps) => {
  const handleChange = (targetOption: string) => () => {
    console.log("handleChange", targetOption);
    const alreadySelected = currentSelections.includes(targetOption);
    alreadySelected ? onRemove(targetOption) : onAdd(targetOption);
  };

  if (!tagsAvailable) return null;

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
              <InputForm.Check.Label style={{ display: "block" }}>
                <Label count={tagCount}>{tagName}</Label>
              </InputForm.Check.Label>
            </InputForm.Check>
          </React.Fragment>
        );
      })}
    </InputForm>
  );
};

const compareProps = (prevProps: TagFilterProps, nextProps: TagFilterProps) => {
  return JSON.stringify(prevProps) === JSON.stringify(nextProps);
};

export default React.memo(TagFilter, compareProps);
