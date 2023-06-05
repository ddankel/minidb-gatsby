import { Tooltip } from "react-tooltip";
import useBreakpoint from "@/common/hooks/useBreakpoint";

const DestktopTooltip = ({ ...props }) => {
  const breakpoint = useBreakpoint();
  const isDesktop = !["xs", "sm"].includes(breakpoint);

  if (!isDesktop) return null;

  return <Tooltip {...props} />;
};

export default DestktopTooltip;
