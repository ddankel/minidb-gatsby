import React from "react";
import styled from "styled-components";

import Gallery from "./Gallery";
import { useFilterContext } from "../../context/FilterContext";
import MobileMenu from "./MobileMenu";
import DesktopMenu from "./DesktopMenu";

const FlexContainer = styled.div`
  display: flex;
  align-items: flex-start;
`;

const GalleryContainer = styled.div`
  flex-grow: 1;
`;

const GuidedSearchPage = () => {
  const { filteredMiniatures } = useFilterContext();
  const hasResults = !!filteredMiniatures.length;

  return (
    <>
      <MobileMenu />
      <FlexContainer>
        <DesktopMenu />
        <GalleryContainer>
          {hasResults && <Gallery minis={filteredMiniatures} />}
          {hasResults || <div>No matching results.</div>}
        </GalleryContainer>
      </FlexContainer>
    </>
  );
};

export default GuidedSearchPage;
