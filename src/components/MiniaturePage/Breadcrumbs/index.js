import React from "react";
import CrumbLink from "./CrumbLink";

const Breadcrumbs = ({ miniatureLines = [] }) => {
  miniatureLines.map((item, index) => {
    console.log("item", item);
    console.log("compiled", miniatureLines.slice(0, index + 1));
  });

  return (
    <>
      {miniatureLines.map((item, index) => {
        const thisLine = miniatureLines.slice(0, index + 1).join(" > ");
        return (
          <>
            <CrumbLink to="/" line={thisLine}>
              {item}
            </CrumbLink>
            {" > "}
          </>
        );
      })}
    </>
  );
};

export default Breadcrumbs;
