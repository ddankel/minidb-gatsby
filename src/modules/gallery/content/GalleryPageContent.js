import React from "react";

import useFilteredCollection from "@/hooks/useFilteredCollection";
import useQueryParamState from "@/hooks/useQueryStringState";

import { FlexContainer, GalleryContainer } from "./GalleryPageContent.styled";

import DesktopMenu from "../components/DesktopMenu";
import Gallery from "../components/Gallery";
import MobileMenu from "../components/MobileMenu";

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
