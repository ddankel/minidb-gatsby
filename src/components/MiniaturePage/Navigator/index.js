import React from "react";

import { Collapse, Stack } from "react-bootstrap";
import { BiCaretUp, BiCaretDown } from "react-icons/bi";
import { useSessionStorage } from "react-use-storage";

import NavButton from "./NavButton";
import { useFilterContext } from "../../../context/FilterContext";
import { findAdjacentMinis } from "./utils";
import { Wrapper, Contents, ToggleButton } from "./styled";

const Navigator = ({ current }) => {
  const [open, setOpen] = useSessionStorage("show-mini-nav", false);
  const { filteredMiniatures } = useFilterContext();

  if (!filteredMiniatures.length) {
    // No miniatures (Gatsby is building)
    return <></>;
  }

  const { prevMini, nextMini } = findAdjacentMinis(filteredMiniatures, current);
  const toggleLabel = open ? "Hide Navigation" : "Show Navigation";
  const ToggleIcon = open ? BiCaretUp : BiCaretDown;

  return (
    <Wrapper>
      <Collapse in={open}>
        <Contents id="navigation-buttons">
          <Stack direction="horizontal">
            <NavButton variant="prev" slug={prevMini.slug} />
            <NavButton variant="next" slug={nextMini.slug} className="ms-auto" />
          </Stack>
        </Contents>
      </Collapse>
      <center>
        <ToggleButton
          onClick={() => setOpen(!open)}
          aria-controls="navigation-buttons"
          aria-expanded={open}
          sz="sm"
          className="bg-primary"
        >
          {toggleLabel} <ToggleIcon />
        </ToggleButton>
      </center>
    </Wrapper>
  );
};

export default Navigator;
