import React from "react";
import styled from "styled-components";

import useFilteredCollection from "@/hooks/useFilteredCollection";
import useQueryParamState from "@/hooks/useQueryStringState";

import Gallery from "@/components/GuidedSearchPage/Gallery";
import MobileMenu from "@/components/GuidedSearchPage/MobileMenu";
import DesktopMenu from "@/components/GuidedSearchPage/DesktopMenu";

const FlexContainer = styled.div`
  display: flex;
  align-items: flex-start;
`;

const GalleryContainer = styled.div`
  flex-grow: 1;
`;

const GalleryPageContent = () => {
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

export default GalleryPageContent;
