import React from "react";

import { Collapse, Stack } from "react-bootstrap";
import { BiCaretUp, BiCaretDown } from "react-icons/bi";
import { useSessionStorage } from "react-use-storage";

import NavButton from "./NavButton";
import { findAdjacentMinis } from "./utils";
import { Wrapper, Contents, ToggleButton, WidthContraint } from "./styled";
import useFilteredCollection from "@/hooks/useFilteredCollection";

const Navigator = ({ current }) => {
  const filteredMiniatures = useFilteredCollection();
  const [open, setOpen] = useSessionStorage("show-mini-nav", false);

  if (!filteredMiniatures.length) {
    // No miniatures (Gatsby is building)
    return <></>;
  }

  const { prevMini, nextMini } = findAdjacentMinis(filteredMiniatures, current);
  const toggleLabel = open ? "Hide Navigation" : "Show Navigation";
  const ToggleIcon = open ? BiCaretUp : BiCaretDown;

  return (
    <Wrapper>
      <WidthContraint>
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
          >
            {toggleLabel} <ToggleIcon />
          </ToggleButton>
        </center>
      </WidthContraint>
    </Wrapper>
  );
};

export default Navigator;
