import React from "react";
import { ThemeProvider } from "styled-components";
import SSRProvider from "react-bootstrap/SSRProvider";

import SearchModal from "../../components/SearchModal";

import AppBar from "./AppBar";
import ContentContainer from "./ContentContainer";
import theme from "./theme";
import useSearchModalState from "./useSearchModalState";

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
