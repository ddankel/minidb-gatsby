import { Modal } from "react-bootstrap";

import { useModalStateContext } from "../../contexts/ModalStateProvider";
import FilterField from "./components/FilterField";

const FilterModal = () => {
  const { isFilterOpen, closeFilter } = useModalStateContext();

  return (
    <Modal keyboard={true} size="lg" show={isFilterOpen} onHide={closeFilter}>
      <Modal.Body>
        <h5>Apply Filter</h5>
        <FilterField />
        <small className="text-muted">Enter 2 or more characters to display matching filters</small>
      </Modal.Body>
    </Modal>
  );
};

export default FilterModal;
