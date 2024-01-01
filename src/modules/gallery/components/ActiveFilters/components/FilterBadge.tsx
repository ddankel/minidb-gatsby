import _ from "lodash";
import { IoMdCloseCircle } from "react-icons/io";

import BadgeButton from "@/common/components/BadgeButton";

type FilterBadgeProps = {
  text: string;
  onClick: (text: string) => void;
};

const FilterBadge = ({ text, onClick }: FilterBadgeProps) => {
  const handleClick = () => onClick(text);

  return (
    <BadgeButton onClick={handleClick} variant="secondary">
      {_.startCase(text)}
      <IoMdCloseCircle style={{ marginLeft: "0.5rem" }} />
    </BadgeButton>
  );
};

export default FilterBadge;
