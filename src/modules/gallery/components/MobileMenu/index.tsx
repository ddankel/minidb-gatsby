import { useState } from "react";
import { Button, Stack } from "react-bootstrap";
import styled from "styled-components";

import { useIsFiltered } from "@/common/stores/useFilterStore";
import FilterModal from "./components/FilterModal";

const Container = styled.div.attrs({
  className: "d-md-none mx-3",
})`
  margin-bottom: 2rem;
`;

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isFiltered = useIsFiltered();

  return (
    <Container>
      <Stack>
        <Button onClick={() => setIsOpen(true)}>
          {isFiltered ? "Edit Filters" : "Filter Miniatures"}
        </Button>
      </Stack>
      <FilterModal show={isOpen} onHide={() => setIsOpen(false)} />
    </Container>
  );
};

export default MobileMenu;
