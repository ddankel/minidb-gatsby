import React from "react";
import CrumbLink from "./CrumbLink";

const Breadcrumbs = ({ miniatureLines = [] }) => {
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
    </>
  );
};

export default Breadcrumbs;
