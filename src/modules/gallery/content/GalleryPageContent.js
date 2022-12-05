import React from "react";

import useQueryParamState from "@/hooks/useQueryStringState";

import Gallery from "../components/Gallery";
import MobileMenu from "../components/MobileMenu";
import DesktopMenu from "../components/DesktopMenu";

import { FlexContainer, GalleryContainer } from "./GalleryPageContent.styled";
import useFilteredCollection from "@/hooks/useFilteredCollection";

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
