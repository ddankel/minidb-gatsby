import React from "react";
import styled from "styled-components";

import useFilteredCollection from "../../hooks/useFilteredCollection";

import Gallery from "./Gallery";
import MobileMenu from "./MobileMenu";
import DesktopMenu from "./DesktopMenu";
import useQueryParamState from "../../hooks/useQueryStringState";

const FlexContainer = styled.div`
  display: flex;
  align-items: flex-start;
`;

const GalleryContainer = styled.div`
  flex-grow: 1;
`;

const GuidedSearchPage = () => {
  const filteredMiniatures = useFilteredCollection();
  const hasResults = !!filteredMiniatures.length;
  useQueryParamState();

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
