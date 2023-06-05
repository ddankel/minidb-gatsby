import SSRProvider from "react-bootstrap/SSRProvider";
import { ThemeProvider } from "styled-components";

import theme from "@/app/styles/theme";

import AppBar from "./components/AppBar";
import ContentContainer from "./components/ContentContainer";
import SearchModal from "./components/SearchModal";
import useSearchModalState from "./hooks/useSearchModalState";

const AppLayout = ({ children, variant }) => {
  const { isModalOpen, openModal, closeModal } = useSearchModalState();

  return (
    <ThemeProvider theme={theme}>
      <SSRProvider>
        <AppBar onSearch={openModal} />
        <SearchModal show={isModalOpen} onHide={closeModal} />
        <ContentContainer variant={variant}>{children}</ContentContainer>
      </SSRProvider>
    </ThemeProvider>
  );
};

export default AppLayout;
