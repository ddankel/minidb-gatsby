import { Modal } from "react-bootstrap";
import SearchField from "./SearchField";

function SearchModal(props) {
  return (
    <Modal keyboard={true} size="lg" {...props}>
      <Modal.Body>
        <h5>Search by name</h5>
        <SearchField />
        <small className="text-muted">Enter 2 or more character to search</small>
      </Modal.Body>
    </Modal>
  );
}

export default SearchModal;
