import { Modal } from "react-bootstrap";
import FilterField from "./FilterField";
import { useModalStateContext } from "../../contexts/ModalStateProvider";
import { useFilteredCollectionTags } from "@/modules/gallery/hooks/useAggregatedTags";
import { useEffect } from "react";

const FilterModal = (props) => {
  const { isFilterOpen, closeFilter } = useModalStateContext();

  // const foo = useFilteredCollectionTags();

  // useEffect(() => {
  //   console.log("tags", foo);
  // }, [foo]);

  return (
    <Modal keyboard={true} size="lg" show={isFilterOpen} onHide={closeFilter} {...props}>
      <Modal.Body>
        <h5>Apply Filter</h5>
        <FilterField />
        <small className="text-muted">Enter 2 or more characters to display matching filters</small>
      </Modal.Body>
    </Modal>
  );
};

export default FilterModal;
