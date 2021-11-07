import React from "react";
import { Modal } from "react-bootstrap";
import SearchField from "./SearchField";

function SearchModal(props) {
  return (
    <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter">
      <Modal.Body>
        <p>Search by name</p>
        <SearchField />
      </Modal.Body>
    </Modal>
  );
}

export default SearchModal;
