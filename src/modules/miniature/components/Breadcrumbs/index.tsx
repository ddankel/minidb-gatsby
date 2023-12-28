import React from "react";
import CrumbLink from "./CrumbLink";

type BreadcrumbsProps = {
  miniatureLines?: string[];
  name: string;
};

const Breadcrumbs = ({ miniatureLines = [], name }: BreadcrumbsProps) => {
  return (
    <>
      {miniatureLines.map((item, index) => {
        const thisLine = miniatureLines.slice(0, index + 1).join(" > ");
        return (
          <React.Fragment key={index}>
            <CrumbLink to="/" line={thisLine}>
              {item}
            </CrumbLink>
            {" > "}
          </React.Fragment>
        );
      })}
      {name}
    </>
  );
};

export default Breadcrumbs;
