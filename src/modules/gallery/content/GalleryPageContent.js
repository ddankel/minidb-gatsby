import React from "react";

import useFilteredCollection from "@/hooks/useFilteredCollection";
import useQueryParamState from "@/hooks/useQueryStringState";

import Gallery from "@/components/GuidedSearchPage/Gallery";
import MobileMenu from "@/components/GuidedSearchPage/MobileMenu";
import DesktopMenu from "@/components/GuidedSearchPage/DesktopMenu";

import { FlexContainer, GalleryContainer } from "./GalleryPageContent.styled";
import useAggregatedTags from "../hooks/useAggregatedTags";

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
