import React from "react";
import { ThemeProvider } from "styled-components";
import SSRProvider from "react-bootstrap/SSRProvider";

import theme from "@/app/styles/theme";
import SearchModal from "@/common/components/SearchModal";

import AppBar from "./components/AppBar";
import ContentContainer from "./components/ContentContainer";
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
