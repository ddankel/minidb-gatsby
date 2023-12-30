import { startCase } from "lodash";

import useCountForOption from "../hooks/useCountForOption";

type FilteResultsProps = {
  option: {
    name: string;
    value: string;
  };
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
