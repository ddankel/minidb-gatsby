import React, { useMemo, useState } from "react";
import { Button, Form } from "react-bootstrap";
import _ from "lodash";

// initial option count prop
// featured options prop
// show all always prop

// is expanded state
// expandable state(?) - if enough options to collapse

// expanded
// TITLE
// * asdf
// * asdf
// ^ show less

// compressed
// TITLE
// * any selected options
// * featured unselectd options
// V show more

const RadioGroup = ({ title, options, value, onChange, featuredOptions }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const isExpandable = featuredOptions && featuredOptions.length < options.length;

  const visibleOptions = useMemo(() => {
    if (!isExpandable) return options;
    if (isExpanded) return options;

    return _.intersection(options, featuredOptions);
  }, [options, featuredOptions, isExpanded, isExpandable]);

  const handleChange = (targetOption) => () => {
    onChange(targetOption);
  };

  const handleClick = (targetOption) => () => {
    if (!value.includes(targetOption)) return;

    // const newValue = _.without(value, targetOption);
    // onChange(newValue);
    onChange("all");
  };

  return (
    <div>
      <div>{title}</div>
      <Form style={{ fontSize: "14px" }}>
        {visibleOptions.map((tagOption) => (
          <div key={tagOption}>
            <Form.Check
              type="radio"
              id={`rad-${title}-${tagOption}`}
              name={`${title}`}
              label={_.startCase(tagOption)}
              checked={value.includes(tagOption)}
              // onChange={() => onChange(tagOption)}
              onChange={handleChange(tagOption)}
              onClick={handleClick(tagOption)}
            />
          </div>
        ))}
      </Form>
      {isExpandable && (
        <Button variant="link" size="sm" onClick={() => setIsExpanded(!isExpanded)}>
          show more
        </Button>
      )}
    </div>
  );
};

export default RadioGroup;
