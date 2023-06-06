import { Modal } from "react-bootstrap";
// import FilterField from "./FilterField";

const FilterModal = (props) => {
  return (
    <Modal keyboard={true} size="lg" {...props}>
      <Modal.Body>
        <h5>Apply Filter</h5>
        {/* <FilterField /> */}
        <small className="text-muted">Enter 2 or more characters to display matching filters</small>
      </Modal.Body>
    </Modal>
  );
};

export default FilterModal;
