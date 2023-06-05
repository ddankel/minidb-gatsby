import { useEffect, useState } from "react";

const useSearchModalState = () => {
  const [modalShow, setModalShow] = useState(false);

  const handleKeyPress = (e) => {
    switch (e.key) {
      case "/":
        e.preventDefault();
        setModalShow(true);
        break;
      case "Escape":
        e.preventDefault();
        setModalShow(false);
        break;
      default:
        return;
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, []);

  return {
    isModalOpen: modalShow,
    openModal: () => setModalShow(true),
    closeModal: () => setModalShow(false),
  };
};

export default useSearchModalState;
