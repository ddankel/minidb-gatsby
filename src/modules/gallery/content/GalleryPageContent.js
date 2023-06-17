import { useFilteredCollectionData } from "@/common/hooks/useCollectionStore";

import ActiveFilters from "../components/ActiveFilters";
import DesktopMenu from "../components/DesktopMenu";
import Gallery from "../components/Gallery";
import MobileMenu from "../components/MobileMenu";
import { FlexContainer, GalleryContainer } from "./GalleryPageContent.styled";

const GalleryPageContent = () => {
  const filteredCollectionData = useFilteredCollectionData();
  const hasResults = !!filteredCollectionData.length;

  return (
    <>
      <MobileMenu />
      <FlexContainer>
        <DesktopMenu />
        <GalleryContainer>
          <ActiveFilters />
          {hasResults && <Gallery minis={filteredCollectionData} />}
          {hasResults || <div>No matching results.</div>}
        </GalleryContainer>
      </FlexContainer>
    </>
  );
};

export default GalleryPageContent;
