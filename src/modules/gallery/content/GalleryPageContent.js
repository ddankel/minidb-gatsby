import { useFilteredCollection } from "@/common/hooks/useCollections";
import ActiveFilters from "../components/ActiveFilters";
import DesktopMenu from "../components/DesktopMenu";
import Gallery from "../components/Gallery";
import MobileMenu from "../components/MobileMenu";
import { FlexContainer, GalleryContainer } from "./GalleryPageContent.styled";

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
          {hasResults && <Gallery collection={filteredCollection} />}
          {hasResults || <div>No matching results.</div>}
        </GalleryContainer>
      </FlexContainer>
    </>
  );
};

export default GalleryPageContent;
