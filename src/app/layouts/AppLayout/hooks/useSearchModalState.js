import { useState, useEffect } from "react";

const useSearchModalState = () => {
  const [modalShow, setModalShow] = useState(false);

  useEffect(() => {
    const handleSearchShortcut = (e) => {
      if (e.key !== "/") return;

      e.preventDefault();
      setModalShow(true);
    };
    window.addEventListener("keydown", handleSearchShortcut);
    return () => window.removeEventListener("keydown", handleSearchShortcut);
  }, []);

  return {
    isModalOpen: modalShow,
    openModal: () => setModalShow(true),
    closeModal: () => setModalShow(false),
  };
};

export default useSearchModalState;
