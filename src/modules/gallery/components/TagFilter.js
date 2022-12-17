import React from "react";
import _ from "lodash";
import { Form } from "react-bootstrap";
import styled from "styled-components";

const InputForm = styled(Form)({ fontSize: "14px" });

// const formatLabel = (rawLabel) => {
//   const parts = rawLabel.split(" > ");

//   if (parts.length === 1) return rawLabel;

//   const spacers = parts.length - 1;
//   let output = "";
//   for (let i = 0; i < spacers; i++) {
//     output = output + "&nbsp;&nbsp;&nbsp;&nbsp;   ";
//   }

//   output = output + _.last(parts);
//   return output;
// };

const formatLabel = (rawLabel) => {
  const parts = rawLabel.split(" > ");
  if (parts.length === 1) return { indention: 0, label: rawLabel };

  return { indention: parts.length - 1, label: _.last(parts) };
};

const TagFilter = ({ name, options, value, onChange, onAdd, onRemove, multiple = false }) => {
  const handleChange = (targetOption) => () => {
    const alreadySelected = value.includes(targetOption);
    alreadySelected ? onRemove(targetOption) : onAdd(targetOption);
  };

  return (
    <InputForm>
      {options.map((tagOption) => {
        const capitolizedLabel = tagOption
          .split(" > ")
          .map((part) => _.startCase(part))
          .join(" > ");

        const { indention, label } = formatLabel(capitolizedLabel);

        return (
          <div key={tagOption}>
            <InputForm.Check
              type="checkbox"
              id={`${name}-${tagOption}`}
              name={`${name}`}
              // label={label}
              // checked={value.includes(tagOption)}
              // onChange={handleChange(tagOption)}
            >
              <InputForm.Check.Input
                type="checkbox"
                checked={value.includes(tagOption)}
                onChange={handleChange(tagOption)}
              />
              <InputForm.Check.Label stylexxx={{ marginLeft: `${1 * indention}rem` }}>
                {capitolizedLabel.split(" > ").map((part, idx) => (
                  <div key={part} style={{ marginLeft: `${idx}rem` }}>
                    {idx > 0 && <span style={{ marginRight: "0.5rem" }}>&gt;</span>}
                    {part}
                  </div>
                ))}
                {/* {indention < 1 && label}
                {indention > 0 && (
                  <>
                    <div>{_.first(capitolizedLabel.split(" > "))}</div>
                    <div style={{ marginLeft: `${1 * indention}rem` }}>
                      &gt; {_.last(capitolizedLabel.split(" > "))}
                    </div>
                  </>
                )} */}
              </InputForm.Check.Label>
            </InputForm.Check>
          </div>
        );
      })}
    </InputForm>
  );
};

export default TagFilter;
