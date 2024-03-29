import { Modal } from "react-bootstrap";
import SearchField from "./SearchField";
import { useModalStateContext } from "../../contexts/ModalStateProvider";

function SearchModal() {
  const { isSearchOpen, closeSearch } = useModalStateContext();

  return (
    <Modal keyboard={true} size="lg" show={isSearchOpen} onHide={closeSearch}>
      <Modal.Body>
        <h5>Search by name</h5>
        <SearchField />
        <small className="text-muted">Enter 2 or more character to search</small>
      </Modal.Body>
    </Modal>
  );
}

export default SearchModal;
