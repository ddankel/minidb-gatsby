import { FlexContainer, GalleryContainer } from "./GalleryPageContent.styled";

import { useFilteredCollection } from "@/common/hooks/useCollectionStore";
import ActiveFilters from "../components/ActiveFilters";
import DesktopMenu from "../components/DesktopMenu";
import Gallery from "../components/Gallery";
import MobileMenu from "../components/MobileMenu";

const GalleryPageContent = () => {
  const filteredCollection = useFilteredCollection();
  const hasResults = !!filteredCollection.length;

  return (
    <>
      <MobileMenu />
      <FlexContainer>
        <DesktopMenu />
        <GalleryContainer>
          <ActiveFilters />
          {hasResults && <Gallery minis={filteredCollection} />}
          {hasResults || <div>No matching results.</div>}
        </GalleryContainer>
      </FlexContainer>
    </>
  );
};

export default GalleryPageContent;
