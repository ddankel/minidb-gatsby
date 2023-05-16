import React from "react";
import { Button } from "react-bootstrap";
import { Modal } from "react-bootstrap";

import useFilteredCollection from "@/common/hooks/useFilteredCollection";
import { useFilterStoreItem } from "@/common/hooks/useFilterStore";

import FilterAccordion from "../../FilterAccordion";
import ActiveFilters from "../../ActiveFilters";
import ResultCount from "./ResultCount";
import { FlexWrap } from "../index.styled";

const FilterModal = ({ show, onHide }) => {
  const isFiltered = useFilterStoreItem("isFiltered");
  const matches = useFilteredCollection();

  return (
    <Modal show={show} fullscreen={"md-down"} onHide={onHide} scrollable={true}>
      <Modal.Header closeButton>
        <Modal.Title>Filters</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <FilterAccordion />
      </Modal.Body>
      <Modal.Footer style={{ justifyContent: "flex-start" }}>
        {isFiltered() && <ActiveFilters />}
        <FlexWrap>
          <ResultCount count={matches.length} />
          <Button onClick={onHide}>Apply</Button>
        </FlexWrap>
      </Modal.Footer>
    </Modal>
  );
};

export default FilterModal;
