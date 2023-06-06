import { useEffect, useState } from "react";

const useFilterModalState = () => {
  const [modalShow, setModalShow] = useState(false);

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (!["f", "F"].includes(e.key)) return;

      e.preventDefault();
      setModalShow(true);
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, []);

  return {
    isModalOpen: modalShow,
    openModal: () => setModalShow(true),
    closeModal: () => setModalShow(false),
  };
};

export default useFilterModalState;
