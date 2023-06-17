import { Button, Modal } from "react-bootstrap";

import { useFilteredCollection } from "@/common/hooks/useCollections";
import { useIsFiltered } from "@/common/hooks/useFilterStore";

import ActiveFilters from "../../ActiveFilters";
import FilterAccordion from "../../FilterAccordion";
import { FlexWrap } from "../index.styled";
import ResultCount from "./ResultCount";

const FilterModal = ({ show, onHide }) => {
  const filteredCollection = useFilteredCollection();
  const isFiltered = useIsFiltered();

  return (
    <Modal show={show} fullscreen={"md-down"} onHide={onHide} scrollable={true}>
      <Modal.Header closeButton>
        <Modal.Title>Filters</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <FilterAccordion />
      </Modal.Body>
      <Modal.Footer style={{ justifyContent: "flex-start" }}>
        {isFiltered && <ActiveFilters />}
        <FlexWrap>
          <ResultCount count={filteredCollection.length} />
          <Button onClick={onHide}>Apply</Button>
        </FlexWrap>
      </Modal.Footer>
    </Modal>
  );
};

export default FilterModal;
