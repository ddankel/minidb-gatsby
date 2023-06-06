import SSRProvider from "react-bootstrap/SSRProvider";
import { ThemeProvider } from "styled-components";

import theme from "@/app/styles/theme";

import AppBar from "./components/AppBar";
import ContentContainer from "./components/ContentContainer";
import SearchModal from "./components/SearchModal";
import FilterModal from "./components/FilterModal";
import useSearchModalState from "./hooks/useSearchModalState";
import useFilterModalState from "./hooks/useFilterModalState";

const AppLayout = ({ children, variant }) => {
  const { isModalOpen, openModal, closeModal } = useSearchModalState();
  const {
    isModalOpen: isFilterModalOpen,
    openModal: openFilterModal,
    closeModal: closeFilterModal,
  } = useFilterModalState();

  return (
    <ThemeProvider theme={theme}>
      <SSRProvider>
        <AppBar onSearch={openModal} onFilter={openFilterModal} />
        <SearchModal show={isModalOpen} onHide={closeModal} />
        <FilterModal show={isFilterModalOpen} onHide={closeFilterModal} />
        <ContentContainer variant={variant}>{children}</ContentContainer>
      </SSRProvider>
    </ThemeProvider>
  );
};

export default AppLayout;
