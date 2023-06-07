import { Modal } from "react-bootstrap";
import FilterField from "./FilterField";
import { useModalStateContext } from "../../contexts/ModalStateProvider";

const FilterModal = (props) => {
  const { isFilterOpen, closeFilter } = useModalStateContext();

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
