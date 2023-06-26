import { Collapse, Stack } from "react-bootstrap";
import { BiCaretDown, BiCaretUp } from "react-icons/bi";
import { useSessionStorage } from "react-use-storage";

import { useFilteredCollection } from "@/common/hooks/useCollections";
import NavButton from "./NavButton";
import { Contents, ToggleButton, WidthContraint, Wrapper } from "./styled";

const Navigator = ({ current: currentSlug }) => {
  const filteredCollection = useFilteredCollection();
  const [open, setOpen] = useSessionStorage("show-mini-nav", false);

  // No miniatures (Gatsby is building)
  if (!filteredCollection.length) return <></>;

  const { prevMini, nextMini } = filteredCollection.findAdjacentMinis(currentSlug);

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
