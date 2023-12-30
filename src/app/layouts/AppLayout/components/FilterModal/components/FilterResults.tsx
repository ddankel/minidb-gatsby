import { startCase } from "lodash";

import useCountForOption from "../hooks/useCountForOption";
import { FilterOption } from "../types/FilterOption";

type FilteResultsProps = {
  option: FilterOption;
};

const FilterResults = ({ option }: FilteResultsProps) => {
  const count = useCountForOption(option);

  const formattedValue = option.value
    .split(" > ")
    .map((segment) => startCase(segment))
    .join(" > ");

  return (
    <span>
      {startCase(option.type)}: {formattedValue} ({count})
    </span>
  );
};
export default FilterResults;
