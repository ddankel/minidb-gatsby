import React from "react";

import useFilteredCollection from "@/common/hooks/useFilteredCollection";

import { FlexContainer, GalleryContainer } from "./GalleryPageContent.styled";

import DesktopMenu from "../components/DesktopMenu";
import Gallery from "../components/Gallery";
import MobileMenu from "../components/MobileMenu";
import ActiveFilters from "../components/ActiveFilters";
import useCollectionStore from "@/common/hooks/useCollectionStore";

const GalleryPageContent = () => {
  // const filteredMiniatures = useFilteredCollection();
  const filteredMiniatures = useCollectionStore((state) => state.filteredCollection);
  const hasResults = !!filteredMiniatures.length;

  return (
    <>
      <MobileMenu />
      <FlexContainer>
        <DesktopMenu />
        <GalleryContainer>
          <ActiveFilters />
          {hasResults && <Gallery minis={filteredMiniatures} />}
          {hasResults || <div>No matching results.</div>}
        </GalleryContainer>
      </FlexContainer>
    </>
  );
};

export default GalleryPageContent;
