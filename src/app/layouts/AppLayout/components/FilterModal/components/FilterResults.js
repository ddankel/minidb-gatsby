import { startCase } from "lodash";

const FilterResults = ({ option }) => {
  const formattedValue = option.value
    .split(" > ")
    .map((segment) => startCase(segment))
    .join(" > ");

  return (
    <span>
      {startCase(option.type)}: {formattedValue} (TODO COUNT)
    </span>
  );
};
export default FilterResults;
