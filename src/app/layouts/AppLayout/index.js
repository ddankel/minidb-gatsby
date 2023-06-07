import SSRProvider from "react-bootstrap/SSRProvider";
import { ThemeProvider } from "styled-components";

import theme from "@/app/styles/theme";

import AppBar from "./components/AppBar";
import ContentContainer from "./components/ContentContainer";
import FilterModal from "./components/FilterModal";
import SearchModal from "./components/SearchModal";
import { ModalStateProvider } from "./contexts/ModalStateProvider";

const AppLayout = ({ children, variant, enableFilter = true }) => {
  return (
    <ThemeProvider theme={theme}>
      <SSRProvider>
        <ModalStateProvider enableFilter={enableFilter}>
          <AppBar />
          <SearchModal />
          <FilterModal />
          <ContentContainer variant={variant}>{children}</ContentContainer>
        </ModalStateProvider>
      </SSRProvider>
    </ThemeProvider>
  );
};

export default AppLayout;
